import React, { useState, useEffect } from 'react';
import Basic from 'sections/campaign/basic';

export default function Basics() {
    useEffect(() => {
        if(document.getElementById('sidebar_basics')){            
            document.getElementById('sidebar_basics').style.backgroundColor = '#5B6EF5';
            document.getElementById('sidebar_basics').style.color = 'white';
            document.getElementById('sidebar_basics').style.fontFamily = 'DM Sans';
            document.getElementById('sidebar_basics').style.fontWeight = 400;
        }
    }, []);
    return (
        <>
            <Basic />
        </>
    );
}