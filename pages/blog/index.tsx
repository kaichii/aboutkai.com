import { allBlogs } from 'contentlayer/generated';
import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import { pick } from 'lib/utils';
import { InferGetStaticPropsType } from 'next';
import { useMemo, useState } from 'react';

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = useMemo(
    () =>
      posts
        .sort(
          (a, b) =>
            Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase())
        ),
    [posts, searchValue]
  );

  return (
    <Container
      title="博客"
      description="写博客对于知识的梳理、理解的加深有很大帮助，有时也会发现自己理解错误的地方。另外，也可以帮助到其他需要这些知识的人，希望我的博客对你有所帮助。"
      url="https://aboutkai.com/blog"
    >
      <div className="max-w-prose mx-auto mb-8 px-2">
        <h1 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
          博客
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-500">
          写博客对于知识的梳理、理解的加深有很大帮助，有时也会发现自己理解错误的地方。另外，也可以帮助到其他需要这些知识的人，希望我的博客对你有所帮助。
        </p>
        <div className="relative w-full mb-6">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="通过标题搜索"
            className="appearance-none block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-400"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">暂无文章</p>
        )}
        {filteredBlogPosts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs.map((p) =>
    pick(p, ['slug', 'title', 'description', 'publishedAt'])
  );

  return { props: { posts } };
}
