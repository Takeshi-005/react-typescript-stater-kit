import React from 'react';
import Area from './components/Area';
import { useGetZipcode } from './hooks/hooks';

const App: React.FC = () => {
  const [state, setState] = React.useState({
    zipcode: ''
  });
  const { onChange, onDelete, value } = useGetZipcode();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value
    });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <section>
        <input type="text" name="zipcode" onChange={handleChange} />
        <button onClick={() => onChange(state)}>FetchApi</button>
      </section>
      {value.error?.message}
      {value.result.map((item, i) => (
        <Area
          key={i}
          area={{
            pref: item.data[0].ja.prefecture,
            city: item.data[0].ja.address1,
            town: item.data[0].ja.address2
          }}
          i={i}
          handleDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default App;
