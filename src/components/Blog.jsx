import React from "react";
import styles from "./Blog.module.css";
import LazyImage from "./LazyImage";

function Blog({ blogData }) {
  if (!blogData || !blogData.posts) {
    return null;
  }

  const posts = Object.values(blogData.posts);

  return (
    <div className={styles.blog} id="journal">
      <h2>{blogData.title}</h2>
      <div className={styles.blogGrid}>
        {posts.map((post) => (
          <div key={post.title} className={styles.post}>
            <LazyImage src={post.image} alt={post.title} />
            <div>
              <p className={styles.postDate}>{post.date}</p>
              <p>{post.title}</p>
            </div>
            <span className={styles.label}>{post.type}</span>
          </div>
        ))}
      </div>
      <a href={blogData.button_link}>{blogData.button_label}</a>
    </div>
  );
}

export default Blog;
