import ReactDOM from 'react-dom/client';

const renderExample = () => {
    const renderExample = ReactDOM.createRoot(document.getElementById('renderExample'));
    renderExample.render( <div style={{"display": "none"}}>RenderExample</div> );
}

export default renderExample;