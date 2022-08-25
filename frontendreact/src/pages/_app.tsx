import "../../public/css/template.css";

import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider, useAuth } from "../contexts/Auth/Auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
