import React, {useEffect,useState} from 'react';
import './SortingVisualizer.css';

const SortingVisualizer = (props) => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();
    }, [])

    const resetArray = () => {
        setArray([]);
        for(let i =0;i<150;i++){
            setArray(array => array.concat(randomIntFromInterval(5,700)));
        }
    }
    const mergeSort = () => {

    }
    const quickSort = () => {

    }
    const heapSort = () => {

    }
    const bubbleSort = () => {
        
    }
    const randomIntFromInterval = (min,max) => {
        return Math.floor(Math.random() * (max-min +1) + min);
    }
    return (
        <div className="container">
            <div className="header">
                <button onClick={()=> resetArray()}>Generate New Array</button>
                <button onClick={()=> mergeSort()}>Merge Sort</button>
                <button onClick={()=> quickSort()}>Quick Sort</button>
                <button onClick={()=> heapSort()}>Heap Sort</button>
                <button onClick={()=> bubbleSort()}>Bubble Sort</button>
            </div>
            <div className="bar-container"> 
            {array.map((value,id) => (
                <div className="array-bar" style={{height: `${value}px`}} key={id}></div>
            ))}
            </div>
        </div>
    )
}

export default SortingVisualizer
