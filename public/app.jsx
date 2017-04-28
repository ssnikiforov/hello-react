let Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is from component'
        };
    },

    onButtonClick: function(e) { //callback
        e.preventDefault(); // у нас single page application, поэтому нам не нужно перезагружать страницу

        let name = this.refs.name.value;

        alert(name);
    },

    render: function() {
        let name = this.props.name;
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
