import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, State } from './types';
import { fetchApData } from './redux/actions/actions';

function App() {
  const [charName, setCharName] = useState('');
  const { charInfo, hasBeenFetched } = useSelector((state: State) => state);
  const { name, gender, titles } = charInfo;
  const dispatch: DispatchType = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCharName(value);
  };

  return (
    <div style={ { display: 'flex', flexDirection: 'column', gap: '20px' } }>
      <label htmlFor="characterName">Nome do personagem</label>
      <input
        value={ charName }
        onChange={ handleChange }
        type="text"
        id="characterName"
      />
      <button
        onClick={ () => {
          const formattedName = charName.replace(/ /, '+');
          dispatch(fetchApData(formattedName));
        } }
      >
        Buscar
      </button>
      {
        hasBeenFetched
        && (
          <div>
            <p>{name}</p>
            <p>{gender}</p>
            {
              titles.map((title, index) => <p key={ index }>{title}</p>)
            }
          </div>
        )
      }
    </div>
  );
}

export default App;
