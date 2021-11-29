console.log('hello')


// https://acnhapi.com/v1/

// http://acnhapi.com/v1/villagers/{villagerID}

$.ajax({
    url: 'https://acnhapi.com/v1/villagers/',
    success: function(name){
        console.log(name);
    },
    error: function(error){
        console.log('bad requests: ',  error)
    }
});

