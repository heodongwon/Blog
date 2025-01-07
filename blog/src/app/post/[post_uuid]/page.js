import { useRouter } from 'next/router';
import '../../layout/post.js';

export default function PostPage({ post, comments }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-container">
      <article className="post-content">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
      <section className="comments-section">
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.nickname}:</strong> {comment.text}
            </li>
          ))}
        </ul>
        <form className="comment-form">
          <input type="text" name="nickname" placeholder="Nickname" required />
          <input type="password" name="password" placeholder="Password" required />
          <textarea name="comment" placeholder="Write your comment here..." required />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export async function generateStaticPaths() {
  const posts = [
    { uuid: "1" },
    { uuid: "2" },
  ];

  const paths = posts.map((post) => ({ params: { post_uuid: post.uuid } }));
  return { paths, fallback: true };
}

export async function generateStaticProps({ params }) {
  const post = { title: `Post ${params.post_uuid}`, content: `Content for post ${params.post_uuid}` };
  const comments = [
    { id: "1", nickname: "User1", text: "Great post!" },
    { id: "2", nickname: "User2", text: "Thanks for sharing." },
  ];

  return { props: { post, comments }, revalidate: 10 };
}
