import ListOptions from "../../ListOptions";

const NoteCard = ({noteObj, onEdit, onDelete}) => {
    return <div className="item">
            <h4 style={{"display": "inlineBlock"}}>{noteObj.header}</h4>
            <ListOptions onDelete={onDelete} onEdit={onEdit}/>
            <div className="pagediv" />
            <p>{noteObj.contents}</p>
        </div>
};

export default NoteCard;