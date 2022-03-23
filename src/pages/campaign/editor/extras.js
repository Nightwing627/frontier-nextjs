import React, { useState, useEffect } from 'react';
import Extras from 'sections/campaign/extras';

export default function ExtrasPage() {
    useEffect(() => {
        if(document.getElementById('sidebar_extras')){            
            document.getElementById('sidebar_extras').style.backgroundColor = '#5B6EF5';
            document.getElementById('sidebar_extras').style.color = 'white';
            document.getElementById('sidebar_extras').style.fontFamily = 'DM Sans';
            document.getElementById('sidebar_extras').style.fontWeight = 400;
        }
    }, []);
    return (
        <>
            <Extras />
        </>
    );
}