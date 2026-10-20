import "./globals.css";

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica, CA",
  description: "Dr. Maya Reynolds, PsyD, offers therapy for adults navigating anxiety, panic, trauma, and burnout in Santa Monica, California, with secure telehealth available across California.",
  icons: { icon: "/assets/dr-maya-reynolds.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
