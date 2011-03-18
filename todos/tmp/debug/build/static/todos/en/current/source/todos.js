// ==========================================================================
// Project:   Todos
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

Todos = SC.Application.create();

Todos.Todo = SC.Object.extend({
  title: null,
  isDone: false
});

jQuery(document).ready(function() {
  Todos.mainPane = SC.TemplatePane.append({
    layerId: 'todos',
    templateName: 'todos'
  });
});

Todos.todoListController = SC.ArrayController.create(
/** @scope Todos.todoListController.prototype */ {

  // TODO: Add your own code here.
  content: [],
  
  // Creates a new todo with the passed title, then adds it
  // to the array.
  createTodo: function(title) {
    var todo = Todos.Todo.create({ title: title });
    this.pushObject(todo);
  }
  
});

 
Todos.CreateTodoView = SC.TemplateView.create(SC.TextFieldSupport, {
  insertNewline: function() {
    var value = this.get('value');
 
    if (value) {
      Todos.todoListController.createTodo(value);
      this.set('value', '');
    }
  }
});

Todos.todoListView = SC.TemplateCollectionView.create({
  contentBinding: 'Todos.todoListController'
});

Todos.CheckboxView = SC.TemplateView.extend(SC.CheckboxSupport, {
  valueBinding: '.parentView.content.isDone'
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos');