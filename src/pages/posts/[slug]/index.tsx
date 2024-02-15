import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export default function Page({ post }) {
  const Content = getMDXComponent(post.body.code);
  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Content />
    </article>
  );
}

export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({
    params: { slug: post._raw.flattenedPath },
  }));
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  return { props: { post } };
};
