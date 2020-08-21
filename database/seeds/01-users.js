exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "Shannon", password: "shannon" },
        { id: 2, username: "Stan", password: "Stan" },
        { id: 3, username: "Kelly", password: "Kelly" },
      ]);
    });
};
