import './styles.css';

export const metadata = {
  title: 'Tulane Green Wave Coach Will Hall Buyout Fund',
  description: 'Independent fan-organized crowdfunding campaign advocating a coaching change and a new direction for Tulane football.',
  openGraph: {
    title: 'Tulane Green Wave Coach Will Hall Buyout Fund',
    description: 'Independent fan-organized campaign. Not affiliated with Tulane University or Tulane Athletics.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
