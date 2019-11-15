const supertest = require('supertest')
const { app } = require('../index')
const { MealType } = require("../models/mealType");
const { populateFoodtypes } = require("./utils/populateFoodTypes");

function test () {
  return supertest(app);
}

describe('Food types catalog', () => {
  it('Should get all catalogTypes list', async () => {
    const res = await test().get("/api/catalogs/foodTypes").expect(200);
  })
})