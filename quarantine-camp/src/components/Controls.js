import React, { useState }  from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
import WorldMap from './WorldMap';

const Controls = () => {

  const [data, setData] = useState({
      name: '',
      error_msg: '',
      description: '',
      title: null
  });
  const [direction, setDirection] = useState('');
  const [cardinal, setCardinal] = useState('');
  const character = document.getElementById('character')


  const unabbreviate = (char) => {
    if (char === 'n' && parseInt(character.style.bottom) < 240) {
        setCardinal('north')
        character.style.bottom=parseInt(character.style.bottom)+10+'px';
    }else if (char === 's' && parseInt(character.style.bottom) > 0 ) {
        setCardinal('south')
        character.style.bottom=parseInt(character.style.bottom)-10+'px';
    } else if (char === 'e' && parseInt(character.style.left) < 240 ) {
        setCardinal('east')
        character.style.left=parseInt(character.style.left)+10+'px';
    } else if (char === 'w' && parseInt(character.style.left) > 0 ) {
        character.style.left=parseInt(character.style.left)-10+'px';
        setCardinal('west')
    }
  };

  const addRooms = () => {
    return axiosWithAuth()
      .get('https://quarantine-camp.herokuapp.com/api/adv/init/')
      .then(res => {
          setData(res.data);
      })
      .catch(err => console.log(err));
  };

  const move = (e, cardinal) => {
    e.preventDefault();
    const direction = { direction: cardinal };
    unabbreviate(cardinal);
    axiosWithAuth()
      .post('adv/move/', direction)
      .then(res => {
        setData(res.data);
        setDirection('');
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    setDirection(e.target.value);
  };

  return (
    <div className='controls'>

      <div className='text-display'>

        <h1>HELLO, {data.name}</h1>
        <p>{data.name} moves {cardinal} into... </p>
        <p>An empty room...</p>
        <p> The number {data.title} is painted on the floor.</p>
        <p>{data.error_msg}</p>
        
      </div>
      <WorldMap/>  
      <form 
        className='command-input'
        onSubmit={e => move(e, direction)}
      >

        <input
          onChange={handleChange}
          type='text'
          placeholder='Type commands here:'
          value={direction}
        />

      </form>

    </div>
  )
};

export default Controls;