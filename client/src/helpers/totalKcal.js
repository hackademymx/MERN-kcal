export const totalKcal = foods => foods.reduce((sum, item) => sum + Number(item.kcal), 0)
