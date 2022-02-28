import "../src/style/index.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { memo } from "react";

const App: CustomAppPage = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Gorilla Todo</title>
    </Head>

    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default memo(App);
