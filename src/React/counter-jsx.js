class Counter extends React.Component {
    constructor() {
        super();
        this.state = { count: 223 };
    }
    increment() {
        this.setState({ count: ++this.state.count })
    }
    
    render() {
        return (
            <div>
                <div>
                    Score: <span>{this.state.count}</span><span>/2</span>
                </div>
                <RButton handler={this.increment.bind(this)} text="Refresh"></RButton>
                <PList players={players}></PList>
            </div>
        )
    }
}

const domContainer = document.getElementById('react-app');
ReactDOM.render(React.createElement(Counter), domContainer);


/**
 * Pros
 * - Declarative way looks much better.
 * - Babel, and it works!!. Mix JS + HTML
 * - Sharabe components. (RButton, PList).
 * - Need to write ReactDOM.render  once in SPA apps.
 */