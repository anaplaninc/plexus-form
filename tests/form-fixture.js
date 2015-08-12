let formSchema = {
    title      : "My pretty form",
    description: "Declarative pure data DSLs are the best.",
    type       : "object",
    properties : {
      comment: {
        title      : "Your comment",
        description: "Type something here.",
        type       : "string",
        minLength  : 1
      }
    }
  };

let inputClassesObject = {
  string: 'form-control'
};


export default {
  formSchema,
  inputClassesObject
};