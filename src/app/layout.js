import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "토다닥",
  description: "OK",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>RootLayout</h1>
        <h2 className="test link"><Link href="/">토다닥</Link></h2>
        <ol className="test link">
          <li><Link href="/read/1">키보드</Link></li>
          <li><Link href="/read/2">스위치</Link></li>
        </ol>
        {children}
        <ul className="test link">
          <li><Link href="/create">Create</Link></li>
          <li><Link href="/update/1">Update</Link></li>
          <li><input type="button" value="delete" /></li>
        </ul>
      </body>
    </html>
  );
}