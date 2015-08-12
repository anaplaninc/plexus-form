"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var formSchema = {
  title: "My pretty form",
  description: "Declarative pure data DSLs are the best.",
  type: "object",
  properties: {
    comment: {
      title: "Your comment",
      description: "Type something here.",
      type: "string",
      minLength: 1
    }
  }
};

var inputClassesObject = {
  string: 'form-control'
};

exports["default"] = {
  formSchema: formSchema,
  inputClassesObject: inputClassesObject
};
module.exports = exports["default"];