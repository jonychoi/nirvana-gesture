import React, {useState, useEffect} from 'react';
import Item from './items';

export const Scroller = ({gesture}) => {
    const [position, setPosition] = useState(0);
    const [stop, setStop] = useState(false);
    const [select, setSelect] = useState(false);
    useEffect(() => {
        const positioner = () => {
            if (gesture === 'paper'){
                setStop(false);
                setPosition(position);
                setSelect(false);
                console.log('this is', gesture);
            } else if (gesture === "rock"){
                setStop(true);
                setSelect(true);
                console.log('this is', gesture);
            } else if (gesture === "left" && !stop){
                setStop(false);
                let add = position - 30;
                setPosition(add);
                console.log('this is', gesture);
            } else if (gesture === "right" && !stop){
                setStop(false);
                let add = position + 30;
                setPosition(add);
                console.log('this is', gesture);
            }
        }
        positioner();
    }, [gesture, position, stop])
    const array = [...Array(300).keys()];
    return (
        <div style={{width: '100%', height: 200, position: 'relative', overflowY: 'hidden', overflowX: 'scroll', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{left: position, transition: 'left 1000ms', position: 'absolute', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', justifySelf: 'center', height: '100%'}}>
                {array.map((item) => <Item id={item} key={item} />)}
            </div>
        </div>
    )
}

export default Scroller;