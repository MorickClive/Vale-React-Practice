const OverlayMenu = (props) => {

    return  <div className="overlay">
        <div className="center">
        {props.child}
        <input type="button" value="Close" className="closebtn" onClick={props.onClose}/>
        </div>
    </div>;
}

export default OverlayMenu;