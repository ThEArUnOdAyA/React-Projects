import React from "react";

const Button = ({title, type, onClick}) => {
    // * TODO: Style Applied

    const button = 'bg-blue-400 rounded-lg w-40 h-40 align-center mt-10 ml-[35rem] border-8 border-double'
    const buttonText = ' items-center justify-center text-white text-2xl italic font-bold\
      underline '

    // ! Styles Ended
    



    return (
        <button className={`${button.length !== 0 ? button : alert('No Styles applied') }`} 
        type={`${type ? type : 'button'}`} 
        onClick={onClick}>
            <h1 className={buttonText}>
            {title}
            </h1>
        </button>
    )
}

export default Button;