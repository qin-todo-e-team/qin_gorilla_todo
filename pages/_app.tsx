import "../src/style/index.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { memo } from "react";
import { AuthProvider } from "src/context/AuthContext";

const App: CustomAppPage = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Gorilla Todo</title>
    </Head>

    <AuthProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  </>
);

export default memo(App);
