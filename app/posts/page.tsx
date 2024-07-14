"use client";

import { allPosts } from "@/.contentlayer/generated";
import { PostCard } from "@/components/macros/post-card";
import { format } from "date-fns";

export default function Home() {
  return (
    <div className="md:max-w-[872px]">
      <div className="mt-4 flex flex-col gap-5">
        {allPosts.map(post => (
          <PostCard
            key={post._id}
            title={post.title}
            pubslishedData={format(post.date, "dd-MM-yyyy")}
            readDuration="4 min read"
            link={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
