
const ConsoleDisplay = ({messages}) => {
    return <>   
    { messages.map( (msg) => { return <p key={msg.id}>{msg.msg}</p>} ) }
    </>
}

export default ConsoleDisplay;