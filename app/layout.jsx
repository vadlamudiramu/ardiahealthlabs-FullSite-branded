import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Ardia Health",
  description:
    "Human-centered care, amplified by AI and quantum intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 min-h-screen">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
