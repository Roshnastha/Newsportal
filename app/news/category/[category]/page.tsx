import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "../../../../lib/news-data"; // adjust path if your lib file is elsewhere

type Props = {
  params: {
    category: string; // slug, e.g. "politics"
  };
};

const slugify = (s: string) => s.trim().toLowerCase().replace(/\s+/g, "-");

/** Build unique category names from the articles */
function allCategories(): string[] {
  return Array.from(new Set(newsArticles.map((a) => a.category)));
}

/** Map slug -> canonical category name (or undefined) */
function categoryFromSlug(slug: string): string | undefined {
  return allCategories().find((c) => slugify(c) === slug);
}

/** Get articles for a canonical category name */
function getArticlesByCategoryName(categoryName: string) {
  return newsArticles.filter((a) => a.category === categoryName);
}

/**
 * Required with output: "export"
 * Pre-generate a page for each category slug.
 */
export async function generateStaticParams() {
  const categories = allCategories();
  return categories.map((cat) => ({ category: slugify(cat) }));
}

export default function CategoryPage({ params: { category: slug } }: Props) {
  const categoryName = categoryFromSlug(slug);

  if (!categoryName) {
    notFound();
  }

  const articles = getArticlesByCategoryName(categoryName);

  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 12, fontSize: 28 }}>{categoryName} News</h1>

      {articles.length === 0 ? (
        <p>No articles available for this category.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {articles.map((a) => (
            <li
              key={a.id}
              style={{
                marginBottom: 18,
                borderBottom: "1px solid #eee",
                paddingBottom: 12,
              }}
            >
              <h2 style={{ margin: "4px 0" }}>
                <Link href={`/news/${a.id}`} style={{ color: "#111", textDecoration: "none" }}>
                  {a.title}
                </Link>
              </h2>
              <p style={{ margin: "6px 0", color: "#555" }}>{a.excerpt}</p>
              <small style={{ color: "#888" }}>
                {a.publishedAt} • {a.author} • {a.readTime}
              </small>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}