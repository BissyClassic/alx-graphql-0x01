import { ApolloClient, InMemoryCache, HttpLink} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql"
  }),
  cache: ne
  w InMemoryCache()
})

export default client;
