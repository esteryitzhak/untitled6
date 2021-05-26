import React from 'react';

const ButtonComponent = (props) => {

    return <div>

     <button
        onClick={props.onClick}>
         {
            props.title
         }
     </button>

    </div>

}

export default ButtonComponent;
