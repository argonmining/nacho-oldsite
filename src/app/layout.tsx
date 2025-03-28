import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';

import Providers from '@/app/Providers';
import clsx from 'clsx';
import { Lato, Ubuntu } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import './image-zoom.css';
import './styles.css';
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' });
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['700'], variable: '--font-ubuntu' });

export const metadata: Metadata = {
	title: 'Nacho Wyborski | Blue Chip Token on Kaspa'
};

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={clsx(lato.variable, ubuntu.variable, 'overscroll-x-auto')}>
				<Providers>{children}</Providers>
				<GoogleAnalytics gaId={'G-1ZTE7WNM32'} />
			</body>
		</html>
	);
}
