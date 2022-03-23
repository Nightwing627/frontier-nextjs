import React, { useState, useEffect } from 'react';
import Team from 'sections/campaign/team';

export default function TeamPage() {
    useEffect(() => {
        if(document.getElementById('sidebar_team')){            
            document.getElementById('sidebar_team').style.backgroundColor = '#5B6EF5';
            document.getElementById('sidebar_team').style.color = 'white';
            document.getElementById('sidebar_team').style.fontFamily = 'DM Sans';
            document.getElementById('sidebar_team').style.fontWeight = 400;
        }
    }, []);
    return (
        <>
            <Team />
        </>
    );
}