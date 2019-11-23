const myMealIncorrectTypes = {
  foods: "Camaron",
  mealType: ["uno", "dos"]
};

const myMeal = {
  meal: "pozole",
  foods: [
    "5dd86d85ca285e2241dc1782",
    "5dd86d85ca285e2241dc1783",
    "5dd86d85ca285e2241dc1784"
  ],
  mealType: "5dd86d86bec92e224139c93b"
};

const myMealWithUUIDCatalogs = {
  meal: "pozole dos",
  foods: [
    "bf5e2eda-2a6b-4014-b5fc-64f25fd340da",
    "c9a6152e-735e-45eb-a8c5-07f2295aa5b1",
    "29c9adba-03d0-4e14-8dbf-85fe28a66b4a"
  ],
  mealType: "9907ffd2-0c3e-4540-b9e5-2530262eb81e"
};

const mealUUID = "dfcff76a-318c-4fb3-a5f8-1dcd936c1159";

const updateMeal = {
  meal: "pozole dos UPDATED",
  foods: [
    "bf5e2eda-2a6b-4014-b5fc-64f25fd340da",
    "c9a6152e-735e-45eb-a8c5-07f2295aa5b1",
    "29c9adba-03d0-4e14-8dbf-85fe28a66b4a"
  ],
  mealType: "9907ffd2-0c3e-4540-b9e5-2530262eb81e"
};

const mealToDelete = {
  meal: "ceviche de camaron",
  foods: [
    "bf5e2eda-2a6b-4014-b5fc-64f25fd340da",
    "c9a6152e-735e-45eb-a8c5-07f2295aa5b1",
    "29c9adba-03d0-4e14-8dbf-85fe28a66b4a"
  ],
  mealType: "9907ffd2-0c3e-4540-b9e5-2530262eb81e"
};

module.exports = {
  myMealIncorrectTypes,
  myMeal,
  myMealWithUUIDCatalogs,
  mealUUID,
  updateMeal,
  mealToDelete
};
