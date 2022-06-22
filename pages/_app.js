import "../styles/globals.css";
import { wrapper } from "../store/store";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
const ProgressBar = dynamic(() => import("../components/ProgressBar"), {
  ssr: false,
});
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [loader, setLoader] = useState(false);
  return (
    <SessionProvider session={session}>
      <ProgressBar loader={loader} setLoader={setLoader} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {loader ? (
        <div className="w-screen flex items-center justify-center h-screen">
          <div className="w-full h-full w-[60px] h-[60px] rounded-full p-8 bg-blue-500 animate-ping" />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
