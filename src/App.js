import React from 'react';
import Layout from "./Layout/Layout";
import Pages, { Home } from "./Pages";

let App = () => {
  return (
    <Layout Home={Home}>
      <Pages />
    </Layout>
  )
}

export default App;
