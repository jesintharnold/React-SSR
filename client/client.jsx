import react from 'react';
import reactDom from 'react-dom';

const App=()=>(
    <div>
        This is a component - Client.jsx
    </div>
)

reactDom.render(<App/>,document.querySelector("#container"));