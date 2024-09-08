import React from 'react';
import PostsComponent from './PostsComponent';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <h1>Posts</h1>
      <PostsComponent />
    </div>
  );
}

export default App;
