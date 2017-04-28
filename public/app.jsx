let GreeterMessage = React.createClass({
    render: function () {
        let name = this.props.name;
        let message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}!</p>
            </div>
        );
    }
});

let GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        let name = this.refs.name.value;
        let message = this.refs.message.value;
        let updates = {};

        if (typeof name === "string" && name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if (typeof message === "string" && message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onUpdates(updates);
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="name" placeholder="Enter your name"/>
                    </div>
                    <div>
                        <textarea ref="message" rows="3" placeholder="Enter the message"/>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
});

let Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is from component'
        };
    },

    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    handleUpdates: function (updates) {
        this.setState(updates);
    },

    render: function () {
        let name = this.state.name;
        let message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onUpdates={this.handleUpdates}/>
            </div>
        );
    }
});

let name;
let message;

ReactDOM.render(
    <Greeter name={name} message={message}/>,
    document.getElementById('app')
);
