import Container from "components/Container";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogPost from "components/BlogPost";

export default function Home() {
  return (
    <Container title="主页 - kaichi">
      <div className="flex flex-col justify-center items-start max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-medium text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white">
              kaichi
            </h1>
            <h2 className="mb-4 text-gray-700 dark:text-gray-200">
              前端开发工程师 <span className="font-medium">@面向甩锅编程</span>
            </h2>
            <p className="mb-16 text-gray-600 dark:text-gray-400">
              分享个人观点、新学到的知识以及一些编程经验。 Knowledge Growth in
              Sharing.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Kai Chi"
              height={176}
              width={176}
              src="/avatar.jpeg"
              className="rounded-full filter"
              priority
            />
          </div>
        </div>
        <div className="flex items-center justify-between mb-6 w-full">
          <h3 className="font-medium text-1xl md:text-3xl tracking-light text-black dark:text-white">
            精选文章
          </h3>
          <Link href="/blog">
            <a className="flex items-center text-gray-600 dark:text-gray-400 leading-7 rounded-md hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              查看全部
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
              >
                <path
                  d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
        <BlogPost
          slug="1"
          title="你真的了解 useEffect 吗？"
          description="useEffect 用法大全。"
        />
        <BlogPost
          slug="2"
          title="Flutter 最佳实践"
          description="flutter 最佳实践"
        />
        <BlogPost
          slug="3"
          title="useState 用法"
          description="Voluptate laboris nisi voluptate aliquip reprehenderit tempor velit."
        />
        <div className="flex items-center justify-between mt-16 mb-4 w-full">
          <h3 className="font-medium text-1xl md:text-3xl tracking-light  text-black dark:text-white">
            最新视频
          </h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://space.bilibili.com/12951817"
            className="flex items-center text-gray-600 dark:text-gray-400 leading-7 rounded-md hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            B 站主页
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
            >
              <path
                d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <h3 className="font-medium text-1xl md:text-3xl tracking-light mt-16 mb-4 text-black dark:text-white">
          追番
        </h3>
      </div>
    </Container>
  );
}