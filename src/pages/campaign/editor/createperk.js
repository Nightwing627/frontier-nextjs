import React, { useState, useEffect } from 'react';
import CreatePerk from 'sections/campaign/createperk';

export default function CreatePerkPage() {
    useEffect(() => {
        if(document.getElementById('sidebar_perks')){            
            document.getElementById('sidebar_perks').style.backgroundColor = '#5B6EF5';
            document.getElementById('sidebar_perks').style.color = 'white';
            document.getElementById('sidebar_perks').style.fontFamily = 'DM Sans';
            document.getElementById('sidebar_perks').style.fontWeight = 400;
        }
    }, []);
    return (
        <>
            <CreatePerk />
        </>
    );
}