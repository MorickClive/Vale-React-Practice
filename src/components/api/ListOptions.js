const ListOptions = ({onEdit, onDelete}) => {
    return <table className="cardOptions">
        <tbody>
            <tr>
                <td>
                    <input type="button" value="Edit" onClick={onEdit} /></td>
                <td>
                    <input type="button" value="Delete" onClick={onDelete} />
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>;
}

export default ListOptions;