// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName


function add (bookList, bookName) {
  let result = [...bookList]
  result.push(bookName);
  return result;
  
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one


function remove (bookList, bookName) {
  let result = [...bookList]
  // console.log(result)
  var book_index = result.indexOf(bookName);
  if (book_index >= 0) {

    result.splice(book_index, 1);
    return result;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
