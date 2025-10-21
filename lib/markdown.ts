import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ContentData {
  slug: string;
  title: string;
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
  keywords?: string;
  content: string;
}

export function getContentBySlug(filename: string): ContentData {
  const fullPath = path.join(contentDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: data.slug || '/',
    title: data.title || '',
    meta_title: data.meta_title,
    meta_description: data.meta_description,
    og_image: data.og_image,
    keywords: data.keywords,
    content,
  };
}

export function getAllContentSlugs(): string[] {
  const files = fs.readdirSync(contentDirectory);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}
