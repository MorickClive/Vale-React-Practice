
const ConsoleDisplay = ({messages}) => {
    return <>   
    { messages.map( (msg) => { return <div key={msg.key}>{msg.msg}</div>} ) }
    </>
}

export default ConsoleDisplay;