import React from "react";
import ReactDom from "react-dom/client";


const Header = () => {
    return
    (
        
        <div>
            {2+2}
            <h1>This is A Heading</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Header/>);
