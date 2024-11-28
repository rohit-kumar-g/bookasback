// Filename: server.js
const express = require('express');
const app = express();
const port = 3000;

const books = {
  books: [
    {id: 1, name: "The Great Gatsby", author: "F. Scott Fitzgerald", publisher: "Scribner", price: 12.99, image_url: "https://i.dr.com.tr/cache/500x400-0/originals/0002042036001-1.jpg", is_best_seller: false},
    {id: 2, name: "To Kill a Mockingbird", author: "Harper Lee", publisher: "J. B. Lippincott & Co.", price: 10.5, image_url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000043580-1.jpg", is_best_seller: false},
    {id: 3, name: "1984", author: "George Orwell", publisher: "Secker & Warburg", price: 9.75, image_url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000064038-1.jpg", is_best_seller: true},
    {id: 4, name: "Pride and Prejudice", author: "Jane Austen", publisher: "T. Egerton, Whitehall", price: 8.25, image_url: "https://i.dr.com.tr/cache/500x400-0/originals/0001839916001-1.jpg", is_best_seller: false},
    {id: 5, name: "The Catcher in the Rye", author: "J.D. Salinger", publisher: "Little, Brown", price: 11.2, image_url: "https://images-eu.ssl-images-amazon.com/images/I/7108sdEUEGL._AC_UL600_SR600,600_.jpg", is_best_seller: false},
    {id: 6, name: "The Hobbit", author: "J.R.R. Tolkien", publisher: "Allen & Unwin", price: 14.75, image_url: "https://i.dr.com.tr/cache/500x400-0/originals/0002037881001-1.jpg", is_best_seller: true},
    {id: 7, name: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", publisher: "Scholastic", price: 13.5, image_url: "https://m.media-amazon.com/images/I/71u-cpucTRL._AC_UF1000,1000_QL80_.jpg", is_best_seller: true},
    {id: 8, name: "The Lord of the Rings", author: "J.R.R. Tolkien", publisher: "George Allen & Unwin", price: 19.99, image_url: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg", is_best_seller: false},
    {id: 9, name: "Fahrenheit 451", author: "Ray Bradbury", publisher: "Ballantine Books", price: 9.95, image_url: "https://i.dr.com.tr/cache/500x400-0/originals/0001750151001-1.jpg", is_best_seller: false},
    {id: 10, name: "Catch-22", author: "Joseph Heller", publisher: "Simon & Schuster", price: 11.8, image_url: "https://m.media-amazon.com/images/I/61y5K2gy6pL._AC_UF1000,1000_QL80_.jpg", is_best_seller: false},
    {id: 11, name: "Brave New World", author: "Aldous Huxley", publisher: "Chatto & Windus", price: 10.25, image_url: "https://i.dr.com.tr/cache/500x400-0/originals/0001790301001-1.jpg", is_best_seller: false},
    {id: 12, name: "Moby-Dick", author: "Herman Melville", publisher: "Harper & Brothers", price: 15.4, image_url: "https://i.dr.com.tr/cache/500x400-0/originals/0001869993001-1.jpg", is_best_seller: true},
    {id: 13, name: "The Great Expectations", author: "Charles Dickens", publisher: "Chapman & Hall", price: 9.6, image_url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000233553-1.jpg", is_best_seller: false},
    {id: 14, name: "War and Peace", author: "Leo Tolstoy", publisher: "The Russian Messenger", price: 17.2, image_url: "https://m.media-amazon.com/images/I/A1aDb5U5myL._AC_UF1000,1000_QL80_.jpg", is_best_seller: false},
    {id: 15, name: "Don Quixote", author: "Miguel de Cervantes", publisher: "Francisco de Robles", price: 12.75, image_url: "https://m.media-amazon.com/images/I/717twzGBHnL._AC_UF1000,1000_QL80_.jpg", is_best_seller: false},
    {id: 16, name: "One Hundred Years of Solitude", author: "Gabriel García Márquez", publisher: "Editorial Sudamericana", price: 14.9, image_url: "https://i.dr.com.tr/cache/500x400-0/originals/0000000597607-1.jpg", is_best_seller: false},
    {id: 17, name: "Anna Karenina", author: "Leo Tolstoy", publisher: "The Russian Messenger", price: 11.6, image_url: "https://m.media-amazon.com/images/I/61Bs7ZYJ+ML._AC_UF1000,1000_QL80_.jpg", is_best_seller: true},
    {id: 18, name: "The Odyssey", author: "Homer", publisher: "Unknown", price: 8.8, image_url: "https://i.dr.com.tr/cache/500x400-0/originals/0001856613001-1.jpg", is_best_seller: true},
    {id: 19, name: "The Count of Monte Cristo", author: "Alexandre Dumas", publisher: "Pétion", price: 13.3, image_url: "https://i.dr.com.tr/cache/500x400-0/originals/0001699507001-1.jpg", is_best_seller: false}
  ],
  success: 1,
  message: "Successful"
};

app.get('/all_books', (req, res) => {
  res.json(books);
});
app.get('/best_sellers', (req, res) => {
    res.json(books);
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
