import React from 'react';
import { NAME } from '@component/index';
const Demo = () => {
    return (
        <div className="NAME">
            <NAME>children</NAME>
            <NAME _prop={'Hello World'}>children</NAME>
        </div>
    );
};

export default Demo;
