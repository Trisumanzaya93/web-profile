import { source } from '@/lib/source';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = source.getPage([]);
  console.log(page, slug);
  
    
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <h1 className="text-3xl font-bold mb-4">{page.data.title}</h1>
      <DocsBody>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

// // Opsional: Untuk performa maksimal (Static Site Generation)
// export async function generateStaticParams() {
//   return source.generateParams();
// }