const e = React.createElement;

// 1. Use ES6 class specification to create component
class Counter extends React.Component {
    constructor() {
        super();

        // 2. Initializing state to first value
        this.state = { count: 223 };
    }
    increment() {
        this.setState({ count: ++this.state.count })
    }

    // 3. Every class based react component need to have render method
    // implemented. And react takes care of updating DOM depending on 
    // state changes over time 
    render() {
        return e('div', null,
            e('div', null, "Score: ", e("span", null, this.state.count), e("span", null, "/2")),
            e('button', { onClick: this.increment.bind(this), className: "button" }, 'Refresh')
        );
    }
}

// 4. Injecting React element to the 
const domContainer = document.getElementById('react-app');
ReactDOM.render(e(Counter), domContainer);



/**
 * Pros
 * - Can feel entity which can be reusable.
 */

/**
 * Cons
 * - Lots of complecated looking APIs
 */