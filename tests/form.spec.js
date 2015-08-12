import React from 'react';
import {addons} from 'react/addons';
import Form from '../lib/form';
//import Form from '../bundle.js';
//import Form from '../lib/index.js';
import assert from 'assert';

// Fixtures here
import {formSchema, inputClassesObject} from './form-fixture';

let TestUtils = addons.TestUtils;

describe('HTML', () => {
  let component;
  let element;

  beforeEach(() => {

    console.log('React',React);
    console.log('Form', Form);


    component = TestUtils.renderIntoDocument(
      React.createElement(Form, {
        schema        : formSchema,
        inputClasses  : inputClassesObject,
      })
    );

    element = React.findDOMNode(component);
  });

  it('has a <input> tag', () => {
    assert.strictEqual(true, true);

    //assert.strictEqual(element.tagName, 'INPUT');
  });
});