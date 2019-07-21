exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          ingredient_name: "salt",
          ingredient_unit: "10 units"
        },
        {
          ingredient_name: "pepper",
          ingredient_unit: "20 units"
        }
      ]);
    });
};