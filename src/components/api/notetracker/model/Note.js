import ListOptions from "../../ListOptions";

const NoteCard = ({noteObj}) => {
    return <div className="item">
            <h4 style={{"display": "inlineBlock"}}>{noteObj.header}</h4>
            <div className="pagediv" />
            <p>{noteObj.contents}</p>
        </div>
};

export default NoteCard;