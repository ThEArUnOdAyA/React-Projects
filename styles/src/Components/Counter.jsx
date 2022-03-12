import React from 'react';
import Button from './Button';

const Counter = () => {
    const [counter, setCounter ] = React.useState(0)
    

    return (
        <div>
            <Button title="-" type="button" onClick={() => setCounter(() => counter - 1)} />
            <h1 className='text-[5rem] ml-[39rem]'>
            {counter}
            </h1>
            <Button title="+" type="button" onClick={() => setCounter(() => counter + 1)} />
        </div>
    )
}

export default Counter;