var msg = new Vue({
    el: '#msg',
    data: {
        message: "Vanessa's Todo List"        
    }
});

var list = new Vue({
    el: '#list',
    data: {
        todos: [
            { text: 'Proposal First Draft', done:true },
            { text: 'Proposal Improved and Final Draft', done:false },
            { text: 'Practical Portfolio', done:false },
            { text: 'Project Implementation and Presentation', done:false },
        ]        
    },

    methods: {
        toggle: function(todo){
            todo.done = !todo.done
        }
    }
});