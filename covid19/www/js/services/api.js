var APP_ID = 'ObtFPQ1Lk7k6v7Xz81q1FwpBRhzr8PLBMttuhhai';
var API_KEY = '2NSI43tPwrEl9QqQIHL9JjJNr6Xg8JzhNwffqSAg';

$(document).ready(function(){
    Parse.initialize(APP_ID, API_KEY);
    Parse.serverURL = 'https://parseapi.back4app.com/';
})

// {
//     "reclamted_by" : "ID_MTA3_USER", 
//     "lat" : 35, 
//     "lng" : 9, 
//     "type" : "The someone else | The sick guy", 
//     "temperature" : 37.5, 
//     "throat" : false, 
//     "cough" : false, 
//     "body" : true, 
//     "seen_foreigner" : true, 
//     "confirmed_foreigner" : false, 
//     "other" : "It can be a long message"
// }

function sendReclamation(reclamation){
    const Reclamation = Parse.Object.extend('Reclamation');
    const Reclamation = new Reclamation();

    
    Object.keys(reclamation).forEach((e) => {
        Reclamation.set(e, reclamation[e]);
    });

    Reclamation.save().then(
    (result) => {
        if (typeof document !== 'undefined') 
            var msg = `ParseObject created: ${JSON.stringify(result)}`;
        console.log('ParseObject created', result);
    },
    (error) => {
        if (typeof document !== 'undefined') 
            var msg = `Error while creating ParseObject: ${JSON.stringify(error)}`;
        console.error('Error while creating ParseObject: ', error);
    }
    );
}

function getMyReclamation(myId){
    const Reclamation = Parse.Object.extend('Reclamation');
    const query = new Parse.Query(Reclamation);
    query.equalTo("reclamed_by", id);
    query.find().then((results) => {
        if (typeof document !== 'undefined') 
            var msg = `ParseObjects found: ${JSON.stringify(results)}`;
        console.log('ParseObjects found:', results);
    }, (error) => {
        if (typeof document !== 'undefined')
            var msg = `Error while fetching ParseObjects: ${JSON.stringify(error)}`
        console.error('Error while fetching ParseObjects', error);
    });
}

function getAllReclamation(){
    const Reclamation = Parse.Object.extend('Reclamation');
    const query = new Parse.Query(Reclamation);
    query.find().then((results) => {
        if (typeof document !== 'undefined') 
            var msg = `ParseObjects found: ${JSON.stringify(results)}`;
        console.log('ParseObjects found:', results);
    }, (error) => {
        if (typeof document !== 'undefined')
            var msg = `Error while fetching ParseObjects: ${JSON.stringify(error)}`
        console.error('Error while fetching ParseObjects', error);
    });
}

function login(username, password){
    Parse.User.logIn(username,password).then((user) => {
        const currentUser = Parse.User.current();
        if (typeof document !== 'undefined') 
            var msg = `Logged in user: ${JSON.stringify(user)}`;
        console.log('Logged in user', user);
      }).catch(error => {
        if (typeof document !== 'undefined')
            var msg = `Error while logging in user: ${JSON.stringify(error)}`;
        console.error('Error while logging in user', error);
      })
}


// {
//     "username": username,
//     "password": password,
//     "email": "email@",
//     "cin": "54455454",
//     "phone": "22447755",
//     "sexe": "sexe",
//     "birthdate": "DATE",
//     "lat": 12,
//     "lng": 35
// }

function register(data){
    const user = new Parse.User()

    Object.keys(body).forEach((e) => {
        user.set(e, data[e]);
    });

    user.signUp().then((user) => {
        if (typeof document !== 'undefined') 
            var msg = `User signed up: ${JSON.stringify(user)}`;
        console.log('User signed up', user);
    }).catch(error => {
        if (typeof document !== 'undefined') 
            var msg = `Error while signing up user: ${JSON.stringify(error)}`
        console.error('Error while signing up user', error);
    })
}