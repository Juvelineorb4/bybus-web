import React, { useEffect, useLayoutEffect } from "react";
import Menu from "@/components/Menu";
import "@/styles/globals.css";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuProvider } from "@/context/MenuContext";
import { UserProvider } from "@/context/UserContext";
import { RecoilEnv, RecoilRoot } from "recoil";
// amplify
import { Amplify, Hub } from "aws-amplify";
import awsExports from "@/aws-exports";
// hooks
import { useUserManagement } from "@/hooks";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
const theme = createTheme({
  palette: {
    primary: {
      main: "#0077B6",
      darker: "#0077B6",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFFFFF",
      darker: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: `Montserrat, sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
Amplify.configure({ ...awsExports, ssr: true });
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>ByBus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <UserProvider>
        <MenuProvider>
          <ThemeProvider theme={theme}>
            <ConfigureMain />
            <Component {...pageProps} />
          </ThemeProvider>
        </MenuProvider>
      </UserProvider>
    </>
  );
};

const ConfigureMain = () => {
  const { checkUser, userSignIn, userSignOut } = useUserManagement();
  useEffect(() => {
    // crear subscripcion
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          userSignIn(data);
          break;
        case "signOut":
          userSignOut();
          break;
        case "confirmSignUp":
          break;
        case "autoSignIn":
          break;
        case "updateUserAttributes":
          break;
      }
    });
    checkUser();
    return unsubscribe;
  }, []);
};

export default App;
