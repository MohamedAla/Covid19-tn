
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    onDeviceReady: function() {
        SetMainClickEventListener();
    }
};

app.initialize();

var AnimationDelay = 800; // in milliseconds 


function SetMainClickEventListener() {
    $(document).on("click", function (event) {
        //console.log(event);
        console.log(event.target);
        T = $(event.target);


        if(T.is($("#LoginSubmit"))){
            login();
        }


    });
}