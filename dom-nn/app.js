// #1
 // document.getElementById('page-banner')
// var banner = document.getElementById('page-banner')
// var bookList = document.getElementById('book-list')
// console.log(banner);

// #2
// document.getElementsByClassName('title')
// var titles = document.getElementsByClassName('title')
// var lis = document.getElementsByTagName('li')
// lis[3]
// for (i = 0; i < titles.length; i++) {
//     console.log(titles[i])
// }

// #3
// var titles = document.getElementsByClassName('title');
// // console.log(Array.isArray(titles));
// // console.log(Array.isArray(Array.from(titles)));
// Array.from(titles).forEach(function(item){
//     console.log(item);
// })

// #4
// const wrap = document.querySelector('#wrapper');
// console.log(wrap);

// #5
// The forEach() method calls a function for each element in an array.

// var books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book){
//     book.textContent += ' (book-title) '
//     console.log(book);
// });

const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>More books</h2>';
bookList.innerHTML += '<p>This is how u add HTML</p>';
// console.log(bookList.innerHTML);



