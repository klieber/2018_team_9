export default async (raw) => {
  const nutrientsArray = raw.report.food.nutrients;
  const convertValue = (obj) => {
    switch (obj.unit) {
      case 'g':
        return obj.value * 1000;
      case 'kcal':
      case 'mg':
      default:
        return obj.value * 1;
    }
  };
  const findNutrient = (id) => {
    const nutrientObject = nutrientsArray.find((e) => e.nutrient_id == id);
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
