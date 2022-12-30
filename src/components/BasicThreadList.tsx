import '../App.css';

import React from 'react';
import { Link } from 'react-router-dom';

const BasicThreadList: React.FC = () => {
    return (
        <div style={{ width: '25vw', margin: 'auto', textAlign: 'center' }}>
            <ul>
                <li>
                    <Link to="/thread/1/styled">{'Inspirational Quotes'}</Link>
                    {' by Aiken'}
                </li>
            </ul>
        </div>
    );
};

export default BasicThreadList;
