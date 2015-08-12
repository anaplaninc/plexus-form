'use strict';

var React = require('react');
var $ = React.DOM;

var CheckBox = React.createClass({
  displayName: 'CheckBox',

  handleChange: function handleChange(event) {
    var val = event.target.checked;
    this.props.update(this.props.path, val, val);
  },
  render: function render() {
    return $.input({
      name: this.props.label,
      type: "checkbox",
      checked: this.props.value || false,
      onChange: this.handleChange });
  }
});

module.exports = CheckBox;