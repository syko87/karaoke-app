export const metadata = {
  title: "Karaoke App",
  description: "Karaoke app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
