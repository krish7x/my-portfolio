import Header from "@/components/layouts/header";
import { DefaultLayout } from "@/components/layouts";
import { BlogCard } from "@/components/macros/blog-card";
import { useState, useEffect, FC } from "react";

interface IBlogItem {
  title?: string;
  pubDate?: string;
  link?: string;
}

export default function Home() {
  const [blogs, setBlogs] = useState<IBlogItem[]>([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@krish7x"
    )
      .then((resp) => resp.json())
      .then((blogs) => setBlogs(blogs.items));
  }, []);

  return (
    <DefaultLayout>
      <Header />
      <div className="flex min-h-screen max-w-[872px] flex-col gap-3 md:gap-3">
        {blogs?.length
          ? blogs.map((val, inx) => (
              <BlogCard
                key={"blog-" + inx}
                title={val?.title}
                pubslishedData={val?.pubDate}
                readDuration="4 min read"
                link={val?.link}
              />
            ))
          : null}
      </div>
    </DefaultLayout>
  );
}
