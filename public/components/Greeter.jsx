let React = require('react');
let GreeterMessage = require('GreeterMessage');
let GreeterForm = require('GreeterForm');

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

module.exports = Greeter;
