# Books List

We've borrowed a list of the 100 top books of all time from [this wonderful GitHub](https://github.com/benoitvallon/100-best-books), and we'll use it to build a React Application.

### When you're finished, the app will feature:

1. Routing with `react-router-dom` to provide bookmarkable (no pun intended) URLs to view books.
2. An interface showing the books list on the left as long as the URL has `/books` in it. (The URL could also have `/books/5a8256b655db3d04c130f0fe` and it should still show the books list!)
3. A text field above the books list which will allow a user to filter through the list to quickly find a book.

### What's included:

- [Bulma](http://bulma.io) is a wonderful alternative to `Bootstrap`, giving us convenient CSS classes to make our web apps beautiful with complex layouts!
- We have source data about the 100 top all time books, in a file `/src/books.json`. Did you know you can `import` .json files just like images and use them to test your application state locally?? Check out `<App />` for more info!
- We have the following components as starter code in the `/src` directory:
  - `<BookList />`  which is being rendered always in the `<App />` component.
  - `<BookDetail />` which always being rendered the same way in the `<App />` component.
- All of the images for the book covers can be found in `/public/images` and if you need to display a particular image, it can be accessed with, for example, with `<img src="/images/imagename.jpg" alt="image title here" />`

The above two components have static HTML examples that demonstrate how the App should look but they do not function in any meaningful way yet. That's where you come in!

### Your Mission!

- Using React Router, render the `<BookList />` component when the URL includes `/books` (with or without anything after `/books`)
- You'll need to pass the entire books list as a prop down to `<BookList />` to render the complete list. 
- Look through the HTML markup in `<BookList />`, notice everything is hard-coded in. You'll want to dynamically render the list instead.
- Create links to each book such that when a user clicks on a book from the list, they are taken to `/books/:id` (substitude `:id` with the actual ID of the book being clicked.)
- Render the `<BookDetail />` component when the user hits `/books/:id` with any book id. You'll need to pass the correct book from the complete list down into the `<BookDetail/>` as a prop!
- Look through the HTML markup in `<BookDetail />`, notice everything is hard-coded in. You'll want to dynamically render the book details instead.
- Once you're done, try and make the book list filter work in `<BookList />`. A user should be able to start typing a word, and any books in the list that include that word should be shown, while all other books hidden. **HINT:** check out the array [`filter()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

####  Have fun!