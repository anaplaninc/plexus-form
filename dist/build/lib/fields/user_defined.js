'use strict';

var React = require('react');

var normalizer = require('./utils/normalizer');
var parser = require('./utils/parser');

var UserDefinedField = React.createClass({
  displayName: 'UserDefinedField',

  normalize: function normalize(text) {
    var n = normalizer[this.props.type];
    return n ? n(text) : text;
  },
  parse: function parse(text) {
    var p = parser[this.props.type];
    return p ? p(text) : text;
  },
  handleChange: function handleChange(value) {
    var text = this.normalize(value);
    this.props.update(this.props.path, text, this.parse(text));
  },
  handleKeyPress: function handleKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  },
  render: function render() {
    return React.createElement(this.props.component, {
      schema: this.props.schema,
      value: this.props.value || '',
      onKeyPress: this.handleKeyPress,
      onChange: this.handleChange
    });
  }
});

module.exports = UserDefinedField;