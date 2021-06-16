import React from 'react';

function Layout(props) {
    return (
        <div>
            Layout!
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;