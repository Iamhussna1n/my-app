import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar/navbar';

export const metadata = {
  title: 'Hassnain Saleem Portfolio',
  description: 'My portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
