import React from 'react';

class NoScreen extends React.Component
{
    constructor() {
        super()
    }

    redner()
    {
        return (
            <div className='Main'>
                <h1>404 Not Found</h1>
            </div>
        );
    }
}

export default NoScreen;