import React, { useState, useEffect }  from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';


const WorldMap = () => {

  const [data, setData] = useState({});

  const [direction, setDirection] = useState('');

  const addRooms = () => {
    return axiosWithAuth()
      .get('https://quarantine-camp.herokuapp.com/api/adv/init/')
      .then(res => {
          console.log("This is the data:", res.data)
          setData(res.data);
        //   setName(res.data.name);
        //   setRooms(res.data.title);
      })
      .catch(err => console.log(err));
  };


  const move = (e, cardinal) => {
    e.preventDefault();
    const direction = { direction: `${cardinal}` };

    return axiosWithAuth()
      .post('adv/move/', direction)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  const handleChange = e => {
    setDirection(e.target.value);
  };

    useEffect(() => {
    addRooms();
  }, []);


    return (
         <div className='map'>
             <div>
                <h1>HELLO, {data.name}</h1>
                <p>Location: {data.title}</p>
                <p>Description: {data.description}</p>
             </div>
             
             <div className="box command-input">
                <form onSubmit={e => move(e, direction)}>
                    <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Type commands here:"
                    value={direction}
                    />
                </form>
            </div>


        </div>
    )}
export default WorldMap;