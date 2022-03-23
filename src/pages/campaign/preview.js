import React, { useState, useEffect } from 'react';
import Preview from 'sections/campaign/preview';

export default function PreviewPage() {
  useEffect(() => {
    if(document.getElementById('sidebar_campaign_preview')){            
      document.getElementById('sidebar_campaign_preview').style.backgroundColor = '#5B6EF5';
      document.getElementById('sidebar_campaign_preview').style.color = 'white';
      document.getElementById('sidebar_campaign_preview').style.fontFamily = 'DM Sans';
      document.getElementById('sidebar_campaign_preview').style.fontWeight = 400;
    }
  }, []);
  return (
    <>
      <Preview />
    </>
  );
}