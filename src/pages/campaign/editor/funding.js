import React, { useState, useEffect } from 'react';
import Funding from 'sections/campaign/funding';

export default function FundingPage() {
    useEffect(() => {
        if(document.getElementById('sidebar_funding')){            
            document.getElementById('sidebar_funding').style.backgroundColor = '#5B6EF5';
        }
    }, []);
    return (
        <>
            <Funding />
        </>
    );
}