## An Overview of Modules in JavaScript

- module it is a reusable piece of code that hides implementation details (so we don't see how it is created)
- usually standalone file but not necessary

Whatever we export from module is called <b>public api</b>

They can be used in different methods:
- compose software: modules are small building blocks that we put together to build complex applications 
- Isolate components: modules can be developed in isolation without thinking about the entire codebase
- abstract code: we just use the module which can be written by other developers without knowing we just use it
- organized codebase: modules lead to a more organized codebase
- reuse code: modules allow us to reuse code easly

modules are imported synchronously 