const request = require("supertest");
const app = require("../app");
const { populateFoodtypes } = require("./utils/populateFoodTypes");

beforeEach(populateFoodtypes);

test("[Food Types Catalog] - Should get all catalogTypes list", async () => {
  const res = await request(app)
    .get("/api/catalogs/foodTypes")
    .expect(200);
});
