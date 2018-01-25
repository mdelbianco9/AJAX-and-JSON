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
    var search = document.getElementById('search').value;

$.ajax({
  // Takes the value from the input and adds it to the index of the api path
  url: root + '/photos/' + search,
  success: function(data) {
    	     
            $('#box').empty();
            var string = data.title.toString().split("");
           	for (i = 0; i < string.length; i++) {
              var box = document.getElementById('box');
              var h1 = document.createElement('H1');
              h1.className = "letter";
              var text = document.createTextNode(string[i])
              h1.appendChild(text);
              box.appendChild(h1);
           	}
            
            console.log(string);
    
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

