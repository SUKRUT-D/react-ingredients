var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText: ''}
    },
    handleChange: function(e) {
        this.setState({newItemText: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        if (this.refs.inputItem.value) {
            var currentItems = this.state.items;
            currentItems.push(this.state.newItemText);
            this.setState({items: currentItems, newItemText: ''});
        }
    },
    render: function() {
        return (
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-sm-10">
                                    <input ref="inputItem" className="form-control" onChange={this.handleChange} value={this.state.newItemText}/>
                                </div>
                                <div className="col-sm-2">
                                    <button className="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <List items={this.state.items}/>
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
