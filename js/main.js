// function bookfinder() {
//   $('#results').empty();
//   var search = document.getElementById('book-search').value;

//   $.ajax ({
//     url: 'https://jsonplaceholder.typicode.com' + '/posts/1',
//     datatype: "json",

//     success: function(data) {
//       console.log(data)
//     },

//     type: "GET"
//   });

  
// }

// document.getElementById('button').addEventListener('click', bookfinder, false)
$('#btn').click(function() {

    var root = 'https://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/posts/1',
  success: function(data) {
        console.log(data.title)
  },
  method: 'GET'
})

// var root = 'https://jsonplaceholder.typicode.com';

// $.ajax({
//   url: root + '/posts/1',
//   datatype: 'json',
//   myfunction: function(data) {
//     var x = data[1].title
//     console.log(x);
//   },
//   method: 'GET'
// });

});

