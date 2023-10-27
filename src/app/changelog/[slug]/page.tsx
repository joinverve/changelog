import { NotionRender } from "@/components/notionRender";
import { fetchPageBlocks, fetchPageBySlug, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchPageBySlug(params.slug);

  if (!post) notFound();

  console.log(post);

  const blocks = await fetchPageBlocks(post.id);

  return <NotionRender blocks={blocks} />;
}
