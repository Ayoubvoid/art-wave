import { LanguageProvider } from "@/components/providers/language-provider";
import { Footer, Header } from "@/components/layout";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <Header />
      <main className="flex min-h-[calc(100vh-5rem)] flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
}
