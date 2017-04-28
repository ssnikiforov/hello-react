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

    onButtonClick: function(e) { //callback
        e.preventDefault(); // у нас single page application, поэтому нам не нужно перезагружать страницу

        let nameRef = this.refs.name;
        let name = nameRef.value;
        nameRef.value = ''; // очищаем содержимое инпута

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            });
            // alert(name);

        }
    },

    render: function() {
        let name = this.state.name;
        let message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

let name = "Stepan";
let message = undefined;

ReactDOM.render(
    <Greeter name={name} message={message}/>,
    document.getElementById('app')
);
