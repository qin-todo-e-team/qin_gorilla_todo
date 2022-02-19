import "../src/style/index.css";

import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { memo } from "react";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>Gorilla Todo</title>
      </Head>
      {
        // TODO ログインしているか検知して、ログインしていなければリダイレクト処理追加する
        route.route.includes("login") ? (
          // TODO Login画面作成後、ログイン画面を表示する
          <></>
        ) : (
          <Component {...pageProps} />
        )
      }
    </>
  );
};

export default memo(App);
