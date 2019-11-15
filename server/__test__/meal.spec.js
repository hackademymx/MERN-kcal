const supertest = require("supertest");
const { app } = require("../index");
const { Meal } = require("../models/meal");

function test() {
  return supertest(app);
}

describe('Meal [Model]', () => {
  it("Should return error is required are missing", done => {
    const meal = new Meal({});
    // https://docs.mongodb.com/manual/reference/method/db.collection.validate/

    meal.validate(error => {
      const { mealType, meal } = error.errors;
      console.log("TCL: meal", meal)
      console.log("TCL: mealType", mealType)

      expect(meal).not.toBeNull();
      expect(meal.kind).toBe("required");
      expect(mealType).not.toBeNull();
      expect(mealType.kind).toBe("required");
      done();
    });
  });
});