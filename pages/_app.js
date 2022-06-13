import MainLayout from "../layout/MainLayout";
import "../styles/globals.css";
import { wrapper } from "../store/store";
import dynamic from "next/dynamic";
const ProgressBar = dynamic(() => import("../components/ProgressBar"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <ProgressBar />
      <Component {...pageProps} />
    </MainLayout>
  );
}


export default wrapper.withRedux(MyApp);
 
