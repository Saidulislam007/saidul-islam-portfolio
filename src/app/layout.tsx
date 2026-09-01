import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Saidul Islam — Full-Stack Developer", description:"Full-stack developer building thoughtful, responsive web products with Next.js, React, Node.js and MongoDB.", icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
