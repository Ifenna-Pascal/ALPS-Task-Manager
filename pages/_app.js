import "../styles/globals.css";
import { wrapper } from "../store/store";

import dynamic from "next/dynamic";
const ProgressBar = dynamic(() => import("../components/ProgressBar"), {
  ssr: false,
});
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ProgressBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
