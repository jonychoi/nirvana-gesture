import React from 'react';


export const Item = ({src, id, select}) => {
    return (
        <div style={{width: select === id ? 150 * 1.5 : 150, height: select === id ? 220 * 1.5 : 220, marginLeft: 20, marginRight: 20, overflow: 'hidden', color: 'white', backgroundColor: 'white', textAlign: 'center', justifyContent: 'center', transition: 'all 300ms'}}>
            <img alt="poster" src={src} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
    )
}

export default Item;