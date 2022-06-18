import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function ProgressBar({ loader, setLoader }) {
  NProgress.configure({
    minimum: 0.3,
    easing: "ease",
    speed: 500,
    showSpinner: false,
  });

  Router.events.on("routeChangeStart", () => {
    setLoader(true)
    NProgress.start()
  });
  Router.events.on("routeChangeComplete", () => {
    setLoader(false)
    NProgress.done()
  });
  Router.events.on("routeChangeError", () => {
    setLoader(false)
    NProgress.done()
  });

  return null;
}
