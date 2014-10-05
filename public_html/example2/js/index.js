var ex2 = new Vue({
    el  : '#ex2',
    data: {
        foods: [{
            fruit: 'apple',
            drink: 'cola'
        }, {
            fruit: 'orange',
            drink: 'sake'
        }],
        selected: {
            fruit: '',
            drink: ''
        }
    },
    methods:{
        selectedFood: function(e, food){
            this.$data.selected.fruit = food.fruit;
            this.$data.selected.drink = food.drink;
        }
    }
});



