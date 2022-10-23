import { useEffect, useState } from "react";

const Test = () => {
    let [number, setNumber] = useState(0);
    let [debounceNum, setDebounceNum] = useState(number);
    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceNum(number + 1);
        }, 1000)
        return () => {
            clearTimeout(timerId);
        }
    }, [number]);

    useEffect(() => {
        console.log('from use effect');
        return () => {
            console.log( 'im from cleanup');
        }
    }, [debounceNum]);

    return (
        <div>
            <button onClick={() => {setNumber(number + 1)}}>{debounceNum}</button>
            {console.log('html render')}
        </div>
    );
}

export default Test;