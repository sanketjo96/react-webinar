class Counter extends React.Component {
    constructor() {
        super();
        this.state = { count: 223 };
    }
    increment() {
        this.setState({ count: ++this.state.count })
    }

    // 1. Declarative way
    // 2. Simpe to understand
    // 3. Can have mix of HTML and power of JS
    render() {
        return (
            <div>
                <div>
                    Score: <span>{this.state.count}</span><span>/2</span>
                </div>
                <RButton handler={this.increment.bind(this)} text="Refresh"></RButton>
                <PList></PList>
            </div>
        )
    }
}

const domContainer = document.getElementById('react-app');
ReactDOM.render(React.createElement(Counter), domContainer);

/**
 * Prblems
 * - Error browser dont understand this funny syntax
 * - Babel, and it works!!
 */