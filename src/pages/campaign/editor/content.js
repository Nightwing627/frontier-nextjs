import React, { useState, useEffect } from 'react';
import Content from 'sections/campaign/content';

export default function ContentPage() {
    useEffect(() => {
        if(document.getElementById('sidebar_content')){            
            document.getElementById('sidebar_content').style.backgroundColor = '#5B6EF5';
            document.getElementById('sidebar_content').style.color = 'white';
            document.getElementById('sidebar_content').style.fontFamily = 'DM Sans';
            document.getElementById('sidebar_content').style.fontWeight = 400;
        }
    }, []);
    return (
        <>
            <Content />
        </>
    );
}