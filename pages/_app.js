import { SidebarProvider } from "@/context/SidebarContext";
import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Head>
        <title>2GEDA - Business Directory, Connecting, Networking, and Commerce</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
