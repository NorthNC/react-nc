import "../styles/globals.css";
import { LanguageProvider } from "@/components/context/LanguageContext"; // Import the provider
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "NORTH group",
  description: "Description of your company website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <NavBar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
