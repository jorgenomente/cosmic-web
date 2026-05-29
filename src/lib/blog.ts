export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  content: string[];
};

export function sortPostsByDate(posts: BlogPost[]) {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
