class PList extends React.Component {
    constructor() {
        super();
        this.state = players;
    }

    // 1. Declarative way
    // 2. Simpe to understand
    // 3. Can have mix of HTML and power of JS
    render() {
        return (
            <div className="p-list-container">
               {
                   this.state.map((p) => (
                        <div className="name-card" key={p.id}>
                            <span>{p.name}</span> <span>{p.Runs}</span>
                        </div>
                   ))
               }
            </div>
        )
    }
}
