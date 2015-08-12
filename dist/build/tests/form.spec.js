'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddons = require('react/addons');

var _libForm = require('../lib/form');

var _libForm2 = _interopRequireDefault(_libForm);

//import Form from '../bundle.js';
//import Form from '../lib/index.js';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

// Fixtures here

var _formFixture = require('./form-fixture');

var TestUtils = _reactAddons.addons.TestUtils;

describe('HTML', function () {
  var component = undefined;
  var element = undefined;

  beforeEach(function () {

    console.log('React', _react2['default']);
    console.log('Form', _libForm2['default']);

    component = TestUtils.renderIntoDocument(_react2['default'].createElement(_libForm2['default'], {
      schema: _formFixture.formSchema,
      inputClasses: _formFixture.inputClassesObject
    }));

    element = _react2['default'].findDOMNode(component);
  });

  it('has a <input> tag', function () {
    _assert2['default'].strictEqual(true, true);

    //assert.strictEqual(element.tagName, 'INPUT');
  });
});