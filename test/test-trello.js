var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

// var Board = require('./index.js');
// var List = require('./index.js');
var Card = require('../js/index.js');

describe('Board Component', function(){
    it('Renders a board, lists and cards', function (){
        var name = 'Test';
        var renderer = TestUtils.createRenderer();
        renderer.render(<Card name={name} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('card');
    });
});