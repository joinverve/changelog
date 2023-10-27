import { Post } from "@/components/post";
import { PageWithBlocks, fetchPageBlocks, fetchPages } from "@/lib/notion";

export default async function Home() {
  const pages = await fetchPages();

  const pagesWithBlocks: PageWithBlocks = await Promise.all(
    pages.results.map(async (page) => ({
      ...page,
      blocks: await fetchPageBlocks(page.id),
    }))
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="max-w-[1200px] w-full">
        <div className="ml-0 md:ml-[25%]">
          <h1 className="text-4xl font-semibold mb-4 text-zinc-700">
            Changelog
          </h1>
          <div className="mb-1">New updates and improvements to Verve.</div>
          <div>
            {/* Subscribe to updates ·{" "} */}
            <a
              href="https://twitter.com/join_verve"
              rel=""
              target="_blank"
              className="text-[#6D59E4] border-b border-transparent hover:border-[#6D59E4] hover:border-dotted transition-all font-medium"
            >
              Follow us on Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] w-full mt-16">
        {pagesWithBlocks.map((page: PageWithBlocks) => (
          <Post key={page.id} post={page} />
        ))}
      </div>
    </main>
  );
}
