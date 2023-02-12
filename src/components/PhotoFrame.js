import React from 'react';

export const PhotoFrame = ({url,title}) => {
   return(
    <div className='photoframe'>
        <div>{title}</div>
        <img src={url}/>
    </div>
   )
}