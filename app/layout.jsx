import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Ardia Health — AI for Care Today, Quantum for Tomorrow',
  description:
    'AI-native healthcare platform building clinical automation, imaging intelligence, and predictive care — with a quantum-ready roadmap.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 px-4 sm:px-8 lg:px-16 py-10 max-w-6xl mx-auto w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
