function login(){
    var password = $("#password").val();
    var username = $("#name").val();

    $("#LoginSubmit").addClass("loading");
    $("#loader").fadeIn(AnimationDelay);

    Parse.User.logIn(username,password).then((user) => {
        // Do stuff after successful login
        if (typeof document !== 'undefined') 
            var msg = `Logged in user: ${JSON.stringify(user)}`;
        console.log('Logged in user', user);
      }).catch(error => {
        if (typeof document !== 'undefined')
            var msg = `Error while logging in user: ${JSON.stringify(error)}`;
        console.error('Error while logging in user', error);
      })

}