'use strict';

var React = require('react');
var $ = React.DOM;

var normalizer = require('./utils/normalizer');
var parser = require('./utils/parser');

var InputField = React.createClass({
  displayName: 'InputField',

  normalize: function normalize(text) {
    return normalizer[this.props.type](text);
  },
  parse: function parse(text) {
    return parser[this.props.type](text);
  },
  handleChange: function handleChange(event) {
    var text = this.normalize(event.target.value);
    this.props.update(this.props.path, text, this.parse(text));
  },
  handleKeyPress: function handleKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  },
  render: function render() {
    return $.input({
      type: "text",
      name: this.props.label,
      value: this.props.value || '',
      className: props.inputClasses[props.schema.type],
      onKeyPress: this.handleKeyPress,
      onChange: this.handleChange });
  }
});

module.exports = InputField;