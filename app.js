function AppComponent() {
    this.name = "Hello";
    this.todos = ["Learn angular2", "Forget all", "Another task"];

    this.addTodo = function(newtodo){
        this.todos.push(newtodo.value);
        newtodo.value ="";
        return false;
    };
    this.deleteTodo = function(i){
        this.todos.splice(i, 1);
    }
}
AppComponent.annotations = [
    new angular.ComponentAnnotation({
        selector: 'my-app'
    }),
    new angular.ViewAnnotation({
        templateUrl: 'app.html',
        directives: [angular.NgFor, angular.NgIf]
    })
];
document.addEventListener('DOMContentLoaded', function() {
    angular.bootstrap(AppComponent);
});