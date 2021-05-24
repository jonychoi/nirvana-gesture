import React from 'react';


export const Item = ({id}) => {
    return (
        <div style={{width: 100, height: 80, marginLeft: 10, marginRight: 10, borderRadius: 20, overflow: 'hidden', color: 'white', backgroundColor: 'white', textAlign: 'center', justifyContent: 'center'}}>
            <span style={{fontWeight: 700, fontSize: 50, color: 'black'}}>
                {id}
            </span>
        </div>
    )
}

export default Item;