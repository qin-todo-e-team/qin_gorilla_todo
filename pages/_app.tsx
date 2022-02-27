import "../src/style/index.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { memo } from "react";

const App: CustomAppPage = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Gorilla Todo</title>
      </Head>
      <ThemeProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
};

export default memo(App);
