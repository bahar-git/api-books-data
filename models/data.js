const products = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655988385l/40121378.jpg",
    genre: "self-help",
    price: 29.99,
    description:
      "The #1 New York Times bestseller. Over 10 million copies sold! Tiny Changes, Remarkable Results, No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights. Clear is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. Here, he draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible. Along the way, readers will be inspired and entertained with true stories from Olympic gold medalists, award-winning artists, business leaders, life-saving physicians, and star comedians who have used the science of small habits to master their craft and vault to the top of their field. Learn how to: make time for new habits (even when life gets crazy); overcome a lack of motivation and willpower; design your environment to make success easier. get back on track when you fall off course. ...and much more. Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal.",
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 2,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    image: "https://m.media-amazon.com/images/I/71sVQDj0SCL._SL1500_.jpg",
    genre: "self-help",
    price: 49.99,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 3,
    title: "Begin Again",
    author: "Emma Lord",
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1674078025-60784619-1674077995.jpg?crop=1xw:1xh;center,top&resize=980:*",
    genre: "romance",
    price: 29.99,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 4,
    title: "Homecoming",
    author: "Kate Morton",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/newscms/2023_18/1943844/51lbm7eqqil-_ac_sy780_.jpg",
    genre: "fantasy",
    price: 39.99,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 5,
    title: "The Exchange: After The Firm",
    author: "John Grisham",
    image: "https://m.media-amazon.com/images/I/91-Dqdv3a8L._SL1500_.jpg",
    genre: "thriller",
    price: 22.99,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 6,
    title: "Hello Beautiful (Oprah's Book Club)",
    author: "Ann Napolitano ",
    image: "https://m.media-amazon.com/images/I/912iiFEK2wL._SL1500_.jpg",
    genre: "novel",
    price: 20,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 7,
    title: "The Psychology of Money",
    author: "Morgan Housel ",
    image: "https://m.media-amazon.com/images/I/71TRUbzcvaL._SY522_.jpg",
    genre: "self-help",
    price: 18.19,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 8,
    title: "The Ballad of Songbirds and Snakes (A Hunger Games Novel)",
    author: "Suzanne Collins",
    image: "https://m.media-amazon.com/images/I/61k7JqSWOUL._SY522_.jpg",
    genre: "fantasy",
    price: 22.99,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 9,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    image: "https://m.media-amazon.com/images/I/71ZvnK+4JiL._SY522_.jpg",
    genre: "self-help",
    price: 14.34,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 10,
    title: "The Little Book of Hygge: The Danish Way to Live Well",
    author: "Meik Wiking",
    image: "https://m.media-amazon.com/images/I/81TaKyoERsL._SY522_.jpg",
    genre: "self-help",
    price: 21.99,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 11,
    title: "By Any Other Name: A Novel",
    author: "Jodi Picoult",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1039002625/1.jpg?width=810&maxHeight=810&quality=85",
    genre: "fiction",
    price: 38.0,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 12,
    title: "The Life Impossible: A Novel",
    author: "Matt Haig",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1443466492/1.jpg?width=810&maxHeight=810&quality=85",
    genre: "fiction",
    price: 23.99,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },

  {
    id: 13,
    title: "The Lighthouse Witches",
    author: "C.J. Cooke",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/0008455449/1.jpg?width=810&maxHeight=810&quality=85",
    genre: "fiction",
    price: 21.99,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 14,
    title: "A Moveable Feast",
    author: "ERNEST HEMINGWAY",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/9355462573/1.jpg?width=810&maxHeight=810&quality=85",
    genre: "fiction",
    price: 17.99,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 15,
    title: "Collide",
    author: "Bal Khabra",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/073525043X/1.jpg?width=810&maxHeight=810&quality=85",
    genre: "romance",
    price: 20.0,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 16,
    title: "Happily Never After",
    author: "Lynn Painter",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/0593638018/1.jpg?width=810&maxHeight=810&quality=85",
    genre: "romance",
    price: 20.0,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 17,
    title: "The Phoenix Bride: A Novel",
    author: "Natasha Siegel",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/0593597877/1.jpg?width=810&maxHeight=810&quality=85",
    genre: "romance",
    price: 20.0,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
  {
    id: 18,
    title: "Chasing Love - Special Edition",
    author: "Kat T Masen",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/9798755757355/1.jpg?width=810&maxHeight=810&quality=85",
    genre: "romance",
    price: 23.5,
    reviews: [
      {
        id: 1,
        text: "Good one",
        rating: 5,
        user: "test@gmail.com",
      },
      {
        id: 2,
        text: "Not good one",
        rating: 3,
        user: "test2@gmail.com",
      },
      {
        id: 3,
        text: "Good one",
        rating: 5,
        user: "test3@gmail.com",
      },
    ],
  },
];

module.exports = products;
