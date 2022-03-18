import React, { useState, useEffect } from 'react';
import Extras from 'sections/campaign/extras';

export default function ExtrasPage() {
    useEffect(() => {
        if(document.getElementById('sidebar_extras')){            
            document.getElementById('sidebar_extras').style.backgroundColor = '#5B6EF5';
        }
    }, []);
    return (
        <>
            <Extras />
        </>
    );
}