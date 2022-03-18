import React, { useState, useEffect } from 'react';
import Basic from 'sections/campaign/basic';

export default function Basics() {
    useEffect(() => {
        if(document.getElementById('sidebar_basics')){            
            document.getElementById('sidebar_basics').style.backgroundColor = '#5B6EF5';
        }
    }, []);
    return (
        <>
            <Basic />
        </>
    );
}