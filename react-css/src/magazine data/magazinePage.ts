export type HeaderData = {
  title: string;
  items: string[];
};

export type Section = {
  title: string;
  featuredArticle?: FeaturedArticle;
  articles: Article[];
};

export type Article = {
  imgPath: string;
  category: string;
  title: string;
  author: string;
};

export type FeaturedArticle = Article & {
  excerpt: string;
};

type MagazinePage = {
  header: {
    title: string;
    items: string[];
  };
  sections: Section[];
};

const articles: Article[] = [
  {
    imgPath: "fashion.webp",
    author: "Joan Smith",
    category: "Fashion",
    title: "This is a fashion related title about some fashion article",
  },
  {
    imgPath: "travel.webp",
    author: "Joan Smith",
    category: "Travel",
    title:
      "Explore the fascinating world of Japan with these top ten travel tips",
  },
  {
    imgPath: "japan.webp",
    author: "Joan Smith",
    category: "Japan",
    title: "Exploring an endless tunnel in Japan sounds fun hey?",
  },
  {
    imgPath: "health.webp",
    author: "Joan Smith",
    category: "Health",
    title: "Learn to cope with your moving train travel sickness",
  },
];

export const magazinePage: MagazinePage = {
  header: {
    title: "My CSS Test",
    items: ["Health", "Fashion", "Food", "Shopping", "Travel", "Event"],
  },
  sections: [
    {
      title: "LATEST",
      featuredArticle: {
        imgPath: "event.webp",
        category: "Event",
        title: "This is an exciting title about an exciting event",
        excerpt:
          " Vivamus sem nisl, aliquet et vestibulum sit amet, sodales sit amet quam. Etiam in nulla rutrum, ultricies nisl ut, efficitur dui. Quisque lacinia luctus ex. Nulla pharetra velit in tristique molestie. Maecenas a leo eros. Nullam venenatis sollicitudin tortor. Sed quis lorem mollis, mollis ex et, consequat felis. Suspendisse at massa est.",
        author: "Joan Smith",
      },
      articles,
    },
    {
      title: "TRENDING",
      articles,
    },
  ],
};
