import React from 'react';

const WorldMap = () => {

    return (
        <div 
            className='map-container'
            style={{
                position:'relative',
                width:'250px',
                height:'250px',
                background:'black',
                borderTop:'1px solid white',
                borderBottom:'1px solid white',
                borderLeft:'1px solid white',
            }}>
            <div
                id='character'
                className='character-position'
                style={{
                    position:'absolute',
                    width:'10px',
                    height:'10px',
                    borderRadius:'100%',
                    margin:'1px',
                    bottom:0,
                    left:0,
                    background:'goldenrod',
                    border:'1px solid brown'
                }}
            >
            </div>
        </div>
    )
};

export default WorldMap;