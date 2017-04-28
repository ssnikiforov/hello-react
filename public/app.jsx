let GreeterMessage = React.createClass({
    render: function() {
        let name = this.props.name;
        let message = this.props.message;

        return (
            <div>
                <h1>Hello {name}</h1>
                <p>{message}</p>
            </div>
        );
    }
});

let GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        let name = this.refs.name.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },

    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

let Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is from component'
        };
    },

    getInitialState: function() {
        return {
            name: this.props.name
        };
    },

    handleNewName: function(name) {
        this.setState({
            name: name
        });
    },

    render: function() {
        let name = this.state.name;
        let message = this.props.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        );
    }
});

let name = "Friend";
// let message = undefined;
let message = "This is not default message";

ReactDOM.render(
    <Greeter name={name} message={message}/>,
    document.getElementById('app')
);
