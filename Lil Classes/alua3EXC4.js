const lamp = {
    IsItOn: false,
    On: function() {
        lamp.IsItOn = true;
        console.log("The Lamp is on!")
    },
    Off: function() {
        lamp.IsItOn = false;
        console.log("The Lamp is off!");
    }
};

lamp.On();
lamp.Off();
