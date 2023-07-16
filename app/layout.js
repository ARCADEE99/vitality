import "./globals.css";
import Nav from "/components/Nav";

export const metadata = {
  title: "Vitality Digitals",
  description: "Your Digital Partner For Growth",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
