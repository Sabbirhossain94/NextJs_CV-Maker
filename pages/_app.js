import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider,CssBaseline } from "@mui/material";
import createEmotionCache from "../utility/createEmotionCache";
import "../styles/globals.css";
import lightTheme from "../styles/theme/lightTheme"
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
