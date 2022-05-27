import ReactDOM from 'react-dom/client';

const renderExample = () => {
    const root = ReactDOM.createRoot(document.getElementById('renderExample'));
    root.render( <div style={{"display": "none"}}>RenderExample</div> );
}

export default renderExample;