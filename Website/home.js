import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import './App.css';

import PostList from '../../../Desktop/xsdsdsd/frontpage-react-app-master/src/PostList';

class App extends Component {
  constructor(...args) {
    super(...args);

    // See server code here: https://launchpad.graphql.com/1jzxrj179
    const networkInterface = createNetworkInterface(
      'https://1jzxrj179.lp.gql.zone/graphql'
    );

    this.client = new ApolloClient({
      networkInterface,
      dataIdFromObject: r => r.id
    });
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <PostList />
      </ApolloProvider>
    );
  }
}

export default App;
