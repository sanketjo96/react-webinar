
const PList = (props) => {
    return (
        <div className="p-list-container">
           {
               props.players.map((p) => (
                    <div className="name-card" key={p.id}>
                        <span>{p.name}</span> <span>{p.Runs}</span>
                    </div>
               ))
           }
        </div>
    )  
}