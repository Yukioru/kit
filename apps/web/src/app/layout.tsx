import '@/app/globals.css';

import { Inter as FontSans } from 'next/font/google';
import { PropsWithChildren } from 'react';

import Header from '@/components/header/header';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
});

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="light">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
