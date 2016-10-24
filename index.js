var React = require('react');
var ReactDOM = require('react-dom');

var Card = function (props) {
    var name = 'This is a Card';
    return (
        <div className="card">
            <div className="card-name">{name}</div>
        </div>
    );
};

var List = React.createClass({
    render: function (props) {
        var title = 'This is a list title';
        var cards = [];
        for (var i = 0; i < 3; i++) {
            cards.push(<Card />);
        }
        return (
            <div className="list">
                {title}
                {cards}
                <input className="cardInput" onChange={this.props.onInputChange}/>  <button onClick={this.props.onAddInputChanged}> Submit </button>
                <hr />
            </div>
        );
    },
     getInitialState: function() {
         return {coll: []}
     },
     onInputChange: function(event){
         console.log('OnChange', event)
     }, 
     onAddInputChanged: function(event){
         event.preventDefault();
         console.log('Input change', event)
     }
});

var Board = React.createClass({
    render: function (props) {
        var title = 'This is a board title';
        var lists = [];
        for (var i = 0; i < 3; i++) {
            lists.push(<List />);
        }
        return (
            <div className="board">
                {title}
                {lists}
            </div>
        );
    }
});




document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<Board />, document.getElementById('app'));
});