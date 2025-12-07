import Layout from "../../components/Layout";
import { getAllPosts, getPostBySlug } from "../../data/posts";

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { notFound: true };
  }
  return {
    props: { post }
  };
}

function formatDate(dateString) {
  const d = new Date(dateString);
  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

export default function BlogPostPage({ post }) {
  const metaDesc =
    post.excerpt ||
    "Artikel blog MPA Corp seputar pariwisata, hiburan, event, dan pengembangan destinasi.";

  return (
    <Layout title={post.title} description={metaDesc}>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <header className="mb-6">
          <p className="text-xs text-slate-400 mb-1">
            {post.category && (
              <span className="font-medium text-amber-300">
                {post.category}
              </span>
            )}
            {post.category && " • "}
            {formatDate(post.date)}
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
            {post.title}
          </h1>
          {post.author && (
            <p className="text-xs text-slate-400">
              Ditulis oleh{" "}
              <span className="text-slate-100">{post.author}</span>
            </p>
          )}
        </header>

        <div
          className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:text-slate-50 prose-a:text-amber-300 prose-strong:text-slate-50 prose-img:rounded-xl prose-img:border prose-img:border-slate-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </Layout>
  );
}
