import Layout from "@/components/layout";
import MyProvider from "@/provider/provider";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Layout>
        <Component {...pageProps} />;
        <ToastContainer />
      </Layout>
    </MyProvider>
  );
}
