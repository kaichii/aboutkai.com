import type { Blog } from 'contentlayer/generated';
import fetcher from 'lib/fetcher';
import Link from 'next/link';
import useSWR from 'swr';

export default function BlogPost({
  slug,
  title,
  description
}: Pick<Blog, 'title' | 'slug' | 'description'>) {
  const { data } = useSWR<{ total: string }>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="py-2">
          <div className="flex flex-row justify-between">
            <p className="w-full mb-1 font-medium">{title}</p>
            <span className="text-xs min-w-max text-gray-700 dark:text-gray-500">
              {views ? Number(views).toLocaleString() : 0} 阅读
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  );
}
