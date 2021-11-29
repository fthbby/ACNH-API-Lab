console.log('hello')


// https://acnhapi.com/v1/

// http://acnhapi.com/v1/villagers/{villagerID}

// $.ajax({
//     url: 'https://api.tvmaze.com/singlesearch/shows?q=girls',
//     success: function(data){
//         console.log(data);
//         console.log(data.language)
//         console.log(data.genres)
//         // console.log(data.height);

//     },
//     error: function(error){
//         console.log('bad requests: ',  error)
//     }
// });

// $('form').on('submit',(event)=> {
//         event.preventDefault();
//         const userInput = $('input[type='text']').val();
//         $.ajax({
//             url: `https://acnhapi.com/v1a/villagers/${userInput}`;
//     }).then(
//         (data) => {
//         $('#name').html(data.name['name-USen'])
//         $('#birthday').html(data.birthday);
//         $('#species').html(data.species);
//         },
//         (error) =>{
//             console.log('bad, no good: ', error)
//         } 
//     );
// });
// const url = `https://acnhapi.com/v1a/villagers/${userInput}`

// async function getVillagerData(e) {
//     e.preventDefault();
//     const userInput = $('input[type="text"]').val();
//     const url = `https://acnhapi.com/v1a/villagers/${userInput}`;

//     const response = await fetch(url);
//     const data = await response.json();

//     $('#name').html(data.name['name-USen'])
//     $('#birthday').html(data.birthday);
//     $('#species').html(data.species);
// }

// $('form').on('submit', getVillagerData);


async function getShowData(e) {
    e.preventDefault();
    const userInput = $('input[type="text"]').val();
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${userInput}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    $('#name').html(data.name);
    $('#language').html(data.language);
    $('#genres').html(data.genres);
}

$('form').on('submit', getShowData);

