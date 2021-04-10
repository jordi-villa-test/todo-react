import React from 'react';
import Header from 'src/view/components/Header';
import Layout from 'src/view/components/Layout';
import TodoInput from 'src/view/containers/TodoInput';
import { TEST_IDS } from './constants';

function Root() {
  return (
    <Layout data-testid={TEST_IDS.wrapper}>
      <Header data-testid={TEST_IDS.header}>React Todo</Header>
      <TodoInput data-testid={TEST_IDS.input} />
    </Layout>
  );
}

export default Root;
