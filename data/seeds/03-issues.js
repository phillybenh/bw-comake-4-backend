exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("issues")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("issues").insert([
        {
          id: 1,
          short_description: "Short description of an issue1",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 1,
          upvotes: 1,
        },
        {
          id: 2,
          short_description: "Short description of an issue2",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 2,
          upvotes: 1,
        },
        {
          id: 3,
          short_description: "Short description of an issue3",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 3,
          upvotes: 1,
        },
        {
          id: 4,
          short_description: "Short description of an issue4",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 1,
          upvotes: 1,
        },
        {
          id: 5,
          short_description: "Short description of an issue5",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 2,
          upvotes: 1,
        },
        {
          id: 6,
          short_description: "Short description of an issue6",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 3,
          upvotes: 1,
        },
        {
          id: 7,
          short_description: "Short description of an issue7",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 1,
          upvotes: 1,
        },
        {
          id: 8,
          short_description: "Short description of an issue8",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 2,
          upvotes: 1,
        },
        {
          id: 9,
          short_description: "Short description of an issue9",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 3,
          upvotes: 1,
        },
        {
          id: 10,
          short_description: "Short description of an issue10",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 1,
          upvotes: 1,
        },
        {
          id: 11,
          short_description: "Short description of an issue11",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 2,
          upvotes: 1,
        },
        {
          id: 12,
          short_description: "Short description of an issue12",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 3,
          upvotes: 1,
        },
        {
          id: 13,
          short_description: "Short description of an issue13",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 1,
          upvotes: 1,
        },
        {
          id: 14,
          short_description: "Short description of an issue14",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 2,
          upvotes: 1,
        },
        {
          id: 15,
          short_description: "Short description of an issue15",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 3,
          upvotes: 1,
        },
        {
          id: 16,
          short_description: "Short description of an issue16",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 1,
          upvotes: 1,
        },
        {
          id: 17,
          short_description: "Short description of an issue17",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 2,
          upvotes: 1,
        },
        {
          id: 18,
          short_description: "Short description of an issue18",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 3,
          upvotes: 1,
        },
        {
          id: 19,
          short_description: "Short description of an issue19",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 1,
          upvotes: 1,
        },
        {
          id: 20,
          short_description: "Short description of an issue20",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 3,
          upvotes: 1,
        },
        {
          id: 21,
          short_description: "Short description of an issue21",
          description:
            "An issue's long description goes here. This is some dummy text so that it takes up an appropriate amount of space. You're not seeing double, all the issues have the same longer description.",
          zip_code: 12345,
          user_id: 1,
          upvotes: 1,
        },
      ]);
    });
};
