// app/main/page.js
import Link from 'next/link';
import '../../styles/main.css';

export default async function MainPage() {
  const posts = [
    { uuid: "1", title: "First Post", excerpt: "This is the first post." },
    { uuid: "2", title: "Second Post", excerpt: "This is the second post." },
  ];
  const categories = [
    { id: "1", name: "Tech" },
    { id: "2", name: "Lifestyle" },
  ];

  return (
    <div className="container">
      <aside className="category-bar">
        <h3>Categories</h3>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </aside>
      <main className="post-list">
        {posts.map((post) => (
          <Link key={post.uuid} href={`/post/${post.uuid}`} className="post-item">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}
