import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import "../styles/globals.css"

const client = new ApolloClient({
  // endpoint
  uri: "https://flyby-gateway.herokuapp.com/",
  // create an instance of InMemoryCache
  // used to cache query results
  cache: new InMemoryCache()
})

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
