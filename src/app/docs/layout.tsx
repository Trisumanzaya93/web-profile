
import { NextProvider } from 'fumadocs-core/framework/next';
import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
// import 'fumadocs-ui/css/neutral.css';
// import 'fumadocs-ui/css/preset.css';

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'My App',
    },
  };
}

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <section
      // required styles
      className="flex flex-col bg-white min-h-screen"
    >
      <NextProvider>
        <DocsLayout {...baseOptions()} tree={source.getPageTree()}>
          {children}
        </DocsLayout>
      </NextProvider>
    </section>
  );
}