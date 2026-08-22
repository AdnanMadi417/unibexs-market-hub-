import './globals.css';

export const metadata = {
  title: 'Unibexs — Malaysia International Student Market Report',
  description:
    'Free market report for education partners: comprehensive analysis of international student applications to Malaysian universities, 2022-2026, sourced from EMGS, MoHE, and QS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
