const request = require("supertest");
const app = require("../app");
const { populateMealtypes } = require("./utils/populateMealTypes");

beforeEach(populateMealtypes);

test("[Meal Types Catalog] - Should get all catalogTypes list", async () => {
  const res = await request(app)
    .get("/api/catalogs/mealTypes")
    .expect(200);
})
