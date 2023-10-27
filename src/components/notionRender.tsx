// "use client";

import { notion } from "@/lib/notion";
import { NotionRenderer, createBlockRenderer } from "@notion-render/client";
import { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const videoRenderer = createBlockRenderer<VideoBlockObjectResponse>(
  "video",
  async (data: any) => {
    return `<video width="320" height="240" controls><source src="${data?.video?.file?.url}" type="video/mp4"></video>`;
  }
);

export const NotionRender = async ({
  blocks,
  className,
}: {
  blocks: any;
  className?: any;
}) => {
  const renderer = new NotionRenderer({
    client: notion,
    renderers: [videoRenderer],
  });

  const html = await renderer.render(...blocks);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className={className} />
  );
};
