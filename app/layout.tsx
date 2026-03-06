import "./globals.css"; // Your Tailwind and global styles

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
   <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}