import React, { useState, useEffect } from 'react';
import Setting from 'sections/campaign/settings';

export default function SettingsPage() {
    useEffect(() => {
        if(document.getElementById('sidebar_settings')){            
            document.getElementById('sidebar_settings').style.backgroundColor = '#5B6EF5';
        }
    }, []);
    return (
        <>
            <Setting />
        </>
    );
}