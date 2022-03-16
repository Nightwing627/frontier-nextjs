/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Main from 'sections/explore/detail/main';
import Story from 'sections/explore/detail/story';
import Relavant from 'sections/explore/detail/relavant';

export default function DetailPage() {
    return (
        <>
            <Main />
            <Story />
            <Relavant />
        </>
    );
}