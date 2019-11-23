const request = require("supertest");
const app = require("../app");
const { Meal } = require("../models/meal");
const { MealType } = require("../models/mealType");
const { FoodType } = require("../models/foodType");

const {
  myMealIncorrectTypes,
  myMeal,
  myMealWithUUIDCatalogs,
  mealUUID,
  updateMeal,
  mealToDelete
} = require("./utils/meals");

test("[Meal Model] - Should return error is required are missing", done => {
  const meal = new Meal({});
  // https://docs.mongodb.com/manual/reference/method/db.collection.validate/

  meal.validate(error => {
    const { mealType, meal } = error.errors;

    expect(meal).not.toBeNull();
    expect(meal.kind).toBe("required");
    expect(mealType).not.toBeNull();
    expect(mealType.kind).toBe("required");
    done();
  });
});

test("[Meal Model] -  Should return error is invalid type", done => {
  const meal = new Meal(myMealIncorrectTypes);

  meal.validate(error => {
    const { mealType, meal, foods } = error.errors;

    expect(meal).not.toBeNull();
    expect(meal.kind).toBe("required");
    expect(mealType).not.toBeNull();
    expect(mealType.kind).toBe("ObjectID");
    expect(foods).not.toBeNull();
    expect(foods.kind).toBe("Array");
    done();
  });
});

test("[Meal Model] - Should save a meal", done => {
  const newMeal = new Meal(myMeal);

  expect(newMeal).toHaveProperty("uuid");
  expect(newMeal.meal).toBe(myMeal.meal);
  expect(newMeal).toHaveProperty("date");
  expect(newMeal).toHaveProperty("foods");
  expect(newMeal).toHaveProperty("mealType");
  done();
});

test("[POST /meals] - Should not create meal with invalid data", async () => {
  await request(app)
    .post("/api/meals")
    .send({})
    .expect(500);
});

test("[POST /meals] - Should not create meal with invalid types", async () => {
  await request(app)
    .post("/api/meals")
    .send(myMeal)
    .expect(500);
});

test("[POST /meals] - Should create a new meal", async () => {
  const response = await request(app)
    .post("/api/meals")
    .send(myMealWithUUIDCatalogs)
    .expect(200);

  const { meal, mealType, foods } = response.body;
  let foodsIDs = [];

  const mealTypeRes = await MealType.findOne({
    uuid: myMealWithUUIDCatalogs.mealType
  });

  await Promise.all(
    myMealWithUUIDCatalogs.foods.map(async item => {
      const result = await FoodType.findOne({ uuid: item });
      foodsIDs.push(result._id);
    })
  );

  const sortFoods = foods.sort();
  const sortFoodsIDs = foodsIDs.sort();

  expect(meal).toBe(myMealWithUUIDCatalogs.meal);
  expect(mealType).toBe(mealTypeRes._id.toString());
  expect(foods.length).toBe(myMealWithUUIDCatalogs.foods.length);
  expect(sortFoods[0].toString()).toEqual(sortFoodsIDs[0].toString());
  expect(sortFoods[1].toString()).toEqual(sortFoodsIDs[1].toString());
  expect(sortFoods[2].toString()).toEqual(sortFoodsIDs[2].toString());
  expect();
});

test("[GET /meals] - Should get all meals", async () => {
  await request(app)
    .get("/api/meals")
    .expect(200)
    .expect(res => {
      res.body.map(item => {
        expect(item).toHaveProperty("uuid");
        expect(item).toHaveProperty("meal");
        expect(item).toHaveProperty("date");
        expect(item).toHaveProperty("foods");
        expect(item).toHaveProperty("mealType");
      });
    });
});

test("[GET /meals/:id] - should not get a meal detail with wrong id param", async () => {
  await request(app)
    .get("/api/meals/123-123")
    .expect(404);
});

test("[GET /meals/:id] - should get a meal detail", async () => {
  await request(app)
    .get(`/api/meals/${mealUUID}`)
    .expect(200);
  expect(res => {
    const { body } = res;

    expect(body).toHaveProperty("uuid");
    expect(body).toHaveProperty("meal");
    expect(body).toHaveProperty("date");
    expect(body).toHaveProperty("foods");
    expect(body).toHaveProperty("mealType");
  });
});

test("[UPDATE /meals/:id] - should not get a meal detail with wrong id param", async () => {
  await request(app)
    .patch("/api/meals/123-123")
    .expect(404);
});

test("[UPDATE /meals/:id] - Should updated a meal successfully", async () => {
  await request(app)
    .patch(`/api/meals/${mealUUID}`)
    .send(updateMeal)
    .expect(200)
    .expect(res => {
      expect(res.body.meal).toBe(updateMeal.meal);
    });
});

test("[DELETE /meals/:id] - should no get a meal detail wrong id param", async () => {
  await request(app)
    .get("/api/meals/123-123")
    .expect(404);
});

test("[DELETE /meals/:id] - Should deleted a meal successfully", async () => {
  let uuid;

  await request(app)
    .post("/api/meals")
    .send(mealToDelete)
    .expect(200)
    .expect(res => (uuid = res.body.uuid));

  await request(app)
    .delete(`/api/meals/${uuid}`)
    .expect(200);
});
