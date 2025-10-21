import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getMarkdownContent } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function NosotrosPage() {
  const { frontmatter, content } = getMarkdownContent('pages', 'company');

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Content */}
          <article className="prose prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
