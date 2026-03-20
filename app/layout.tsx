import "./globals.css";

export const metadata = {
  title: "Sudesh Portfolio",
  description: "Enterprise Architect Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}