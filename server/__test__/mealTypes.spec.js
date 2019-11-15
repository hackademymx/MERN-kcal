const supertest = require("supertest");
const { app } = require("../index");
const { MealType } = require("../models/mealType");
const { populateMealtypes } = require("./utils/populateMealTypes");

function test() {
  return supertest(app);
}

describe("Meal Types Catalog", () => {
  it("Should get all catalogTypes list", async () => {
    const res = await test()
      .get("/api/catalogs/mealTypes")
      .expect(200);
  });
});
