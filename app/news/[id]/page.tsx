import React from "react";
import { notFound } from "next/navigation";
import { getArticleById } from "../../../lib/news-data";

type Props = {
  params: {
    id: string;
  };
};

export default function ArticlePage({ params: { id } }: Props) {
  // Parse the route param to a number (your data uses numeric IDs)
  const articleId = parseInt(id, 10);
  if (Number.isNaN(articleId)) {
    notFound();
  }

  const article = getArticleById(articleId);

  if (!article) {
    notFound();
  }

  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 12 }}>{article.title}</h1>
      <p style={{ color: "#666", marginBottom: 8 }}>
        {article.publishedAt} • {article.author} • {article.readTime}
      </p>

      <div
        style={{ lineHeight: 1.6 }}
        // article.content is HTML in your data, render safely as inner HTML
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </main>
  );
}