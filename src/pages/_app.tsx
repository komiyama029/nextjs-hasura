import { useUserChanged } from "@/hooks/useUserChanged";
import { initializeApollo } from "@/libs/apolloClient";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const {} = useUserChanged();
  const client = initializeApollo();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
