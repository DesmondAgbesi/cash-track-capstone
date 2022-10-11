import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // const { pathname } = useRouter();
  // const showNavbar = router.pathname === '/login' ? false : true ||  router.pathname === '/register' ? false : true;

  return (
    <SessionProvider session={session}>
      {/* {pathname.includes("/login", "/register") ? (
        <Component {...pageProps} />
      ) : ( */}
        <Navbar />
          <Component {...pageProps} />
     
      {/* )} */}
    </SessionProvider>
  );
}

export default MyApp;
