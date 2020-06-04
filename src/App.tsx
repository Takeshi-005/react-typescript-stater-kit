import React from 'react';
import { useFetchApi } from './hooks/hooks';

const App: React.FC = () => {
  const { onChange } = useFetchApi();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button type="button" onClick={onChange}>
          Fetch APi
        </button>
      </header>
    </div>
  );
};

export default App;
