import { Html, Head, Main, NextScript } from "next/document";
import SideBar from "@/components/SideBar";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>One Page Fastfolio</title>
      </Head>
      <body className="antialiased flex min-h-screen">
        <SideBar />
        <div className="flex-grow  bg-square">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
