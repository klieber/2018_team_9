export default async (raw) => {
  const nutrientsArr = raw.report.food.nutrients;
  const convertValue = (obj) => {
    switch (obj.unit) {
      case 'g':
        return obj.value * 1000;
      case 'kcal':
      case 'mg':
      default:
        return obj.value;
    }
  };
  const findNutrient = (id) => {
    const nutrientObject = nutrientsArr.filter((e) => {
      return e.nutrient_id == 269;
    });
    return convertValue(nutrientObject);
  };

  return {
    sugar: findNutrient(269),
    sodium: findNutrient(307),
    fat: findNutrient(204),
    protein: findNutrient(203),
    fiber: findNutrient(291),
    fat_saturated: findNutrient(606),
    calories: findNutrient(208),
    raw: raw.report.food,
  }
};
