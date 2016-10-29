var React = require('react');
var ReactDOM = require('react-dom');

var Card = function (props) {
    return (
        <div className="card">
            <div className="card-name">{props.name}</div>
        </div>
    );
};

var List = React.createClass({
    render: function (props) {
        var title = 'This is a list title';
        return (
            <div className="list">
                {title}
                {this.state.cards}
                <input className="cardInput" onChange={this.onInputChange}/>  <button onClick={this.onAddInputChanged}> Submit </button>
                <hr />
            </div>
        );
    },
     getInitialState: function() {
         return {cards: [], current: ''}
     },
     onInputChange: function(event){
         this.setState({current: event.target.value});
     }, 
     onAddInputChanged: function(event){
         event.preventDefault();
         var cards = this.state.cards;
         cards.push(<Card name={this.state.current}/>)
         this.setState({cards: cards})
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