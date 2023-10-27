import { NotionRender } from "@/components/notionRender";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export const Post = ({ post }: any) => {
  const cover = post?.properties?.Cover?.files.filter(
    (f: any) => f.type === "file"
  )[0];

  return (
    <div className="flex flex-col items-start md:flex-row w-full mb-16">
      <div className="md:sticky w-full md:w-1/4  top-4 text-sm text-[#6D59E4]/60 font-normal my-2">
        {post?.properties?.Date?.date?.start &&
          format(new Date(post?.properties?.Date?.date?.start), "LLLL d, Y")}
      </div>
      <div className="max-w-full w-full md:w-3/4 text-zinc-700">
        {/* <Link href={`/changelog/${post?.properties?.Slug?.formula?.string}`}> */}
        <div className="text-3xl font-semibold mb-6">
          {post?.properties?.Title?.title[0]?.plain_text}
        </div>
        {/* </Link> */}
        {cover && (
          <div className="shadow-xl rounded-[20px] overflow-clip inline-flex items-center justify-center mb-6 border border-black/5">
            {cover?.file?.url && (
              <Image
                src={cover?.file?.url}
                alt={post?.properties?.Title?.title[0]?.plain_text}
                width={588}
                height={308}
              />
            )}
          </div>
        )}
        <NotionRender
          blocks={post.blocks}
          className="text-zinc-700 max-w-[588px]"
        />
      </div>
    </div>
  );
};
