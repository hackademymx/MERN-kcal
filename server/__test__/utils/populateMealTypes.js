const { MealType } = require("../../models/mealType");
const mealTypes = require("../../data/mealTypes.json");

const populateMealtypes = done => {
  MealType.deleteMany({})
    .then(() => {
      return MealType.insertMany(mealTypes);
    })
    .then(() => done());
};

module.exports = { populateMealtypes };
