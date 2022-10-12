import React from 'react';
import { Button } from '@mui/material';
import './NormalButton.scss';

function NormalButton({text,onClick}) {
    return (
        <div className='normal-button-outer'>
            <Button variant='contained' className='normal-button'>{text}</Button>
        </div>
    );
}

export default NormalButton;