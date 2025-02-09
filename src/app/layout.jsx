/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import '../index.scss';

// WRAPPERS
import LayoutWrapper from './common/components/wrappers/LayoutWrapper';
import Providers from './common/components/wrappers/Providers';
import { cn } from '@/lib/utils';

const notoSans = Noto_Sans({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notoSans',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(notoSans.className)}>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
