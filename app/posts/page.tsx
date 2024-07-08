"use client";

import Header from "@/components/layouts/header";
import { DefaultLayout } from "@/components/layouts";
import { PostCard } from "@/components/macros/post-card";
import { allPosts } from "@/.contentlayer/generated";
import { format } from "date-fns";

interface IPostItem {
  title?: string;
  pubDate?: string;
  link?: string;
}

export default function Home() {
  return (
    <DefaultLayout>
      <Header />
      <div className="flex min-h-screen max-w-[872px] flex-col gap-1">
        {allPosts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            pubslishedData={format(post.date, "dd-MM-yyyy")}
            readDuration="4 min read"
            link={post.slug}
          />
        ))}
      </div>
    </DefaultLayout>
  );
}
