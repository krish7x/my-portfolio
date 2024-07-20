"use client";

import { allPosts } from "@/.contentlayer/generated";
import { PostCard } from "@/components/macros/post-card";
import { format } from "date-fns";

export default function Home() {
  return (
    <div className="md:max-w-[872px]">
      <div className="mt-4 flex flex-col gap-5">
        {allPosts
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .map(post => (
            <PostCard
              key={post._id}
              title={post.title}
              pubslishedData={format(post.date, "dd-MM-yyyy")}
              readDuration={post.minutesRead}
              link={post.slug}
            />
          ))}
      </div>
    </div>
  );
}
