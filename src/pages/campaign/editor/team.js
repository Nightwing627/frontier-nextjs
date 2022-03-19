import React, { useState, useEffect } from 'react';
import Team from 'sections/campaign/team';

export default function TeamPage() {
    useEffect(() => {
        if(document.getElementById('sidebar_team')){            
            document.getElementById('sidebar_team').style.backgroundColor = '#5B6EF5';
        }
    }, []);
    return (
        <>
            <Team />
        </>
    );
}