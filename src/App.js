import "./App.css";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/GetUsers";
import AddUserForm from "./Components/AddUserForm";

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
            return alert(`Graphql error ${message} `);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:8000/graphql" }),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

function App() {
    return (
        <ApolloProvider client={client}>
            <AddUserForm />
            <GetUsers />
        </ApolloProvider>
    );
}

export default App;
