let React = require('react');

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

module.exports = GreeterForm;
