import { Button } from '@mui/material';
import React from 'react';
import './ButtonStyles.scss'

function ColoredButton({text,onClick}) {
    return (
        <div className='colored-button-outer'>
            <Button variant='contained' className='colored-button'>{text}</Button>
        </div>
    );
}

export default ColoredButton;