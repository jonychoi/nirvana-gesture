import React, {useState, useEffect, useRef} from 'react';
import Item from './items';
import posters from '../posters';

export const Scroller = ({gesture}) => {
    const width = useRef(null);
    const [position, setPosition] = useState(0);
    const [stop, setStop] = useState(false);
    const [select, setSelect] = useState(null);
    const [transition, setTransition] = useState('left 300ms');
    
    useEffect(() => {
        const calculator = () => {
            let halflength = Math.floor(posters.length / 2);
            let widthpos = width.current.offsetWidth;
            console.log(Math.floor(halflength + position / widthpos * halflength));
            if(position > 0) {
                return setSelect(Math.floor(halflength + position / widthpos * halflength) + 7);
            } else {
                return setSelect(Math.floor(halflength -position / widthpos * halflength) + 7);
            }
        }
        const positioner = () => {
            if (gesture === 'paper'){
                setSelect(stop ? true : false);
                setStop(false);
                setSelect(null);
            } else if (gesture === "rock"){
                setStop(true);
                calculator();
                setTransition('left 0ms');
            } else if (gesture === "left" && !stop){
                setTransition('left 300ms');
                setStop(false);
                let add = position + 20;
                setPosition(add);
            } else if (gesture === "right" && !stop){
                setTransition('left 300ms');
                setStop(false);
                let add = position - 20;
                setPosition(add);
            }
        }
        positioner();
    }, [gesture, position, select, stop])
    return (
        <>
            <div style={{width: '100%', height: 300, position: 'relative', display: 'flex', overflowY: 'hidden', overflowX: 'scroll', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
                <div ref={width} style={{left: position, transition: transition, position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', justifySelf: 'center', height: '100%'}}>
                    {posters.map((item, index) => <Item select={select} src={item} key={index} id={index} />)}
                </div>
            </div>
            <h1 style={{fontWeight: '700', fontSize: 50, color: 'white', marginTop: 25}}>{select ? 'selected' : 'diselected'}</h1>
        </>
    )
}

export default Scroller;