import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getMarkdownContent, getAllMarkdownFiles } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const applications = getAllMarkdownFiles('applications');
  return applications.map((app) => ({
    slug: app.slug,
  }));
}

export default function ApplicationPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = getMarkdownContent('applications', params.slug);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-primary">Inicio</a>
            <span className="mx-2">/</span>
            <a href="/aplicaciones" className="hover:text-primary">Aplicaciones</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{frontmatter.title}</span>
          </nav>

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
