const dog = {
    name: "Rex",
    race: "Labador",
    bark: function(){
        console.log("Bark Bark!");
    },

    ShowStat: function() {
        console.log("This is", dog.name, "and he is a", dog.race,);
    }
};

dog.bark();
dog.ShowStat();