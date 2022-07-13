import { allBlogs } from 'contentlayer/generated';
import components from 'components/MDXComponents';
import BlogLayout from 'layouts/blog';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Post({
  post
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(post.body.code);
  return (
    <BlogLayout post={post}>
      <Component components={components} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = allBlogs.find((post) => post.slug === params!.slug)!;

  return { props: { post } };
}
