import React from 'react';

const WorldMap = () => {

    return (
        <div 
            className='map-container'
            style={{
                position:'relative',
                width:'250px',
                height:'250px',
                background:'black'    
            }}>
            <div
                id='character'
                className='character-position'
                style={{
                    position:'absolute',
                    width:'10px',
                    height:'10px',
                    borderRadius:'100%',
                    bottom:0,
                    left:0,
                    background:'goldenrod'
                }}
            >
            </div>
        </div>
    )
};

export default WorldMap;