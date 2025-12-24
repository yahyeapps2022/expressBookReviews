const axios = require("axios");

// Base URL of your Express server
const BASE_URL = "http://localhost:3000";

// Task 2: Get all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    return error.message;
  }
}

// Task 3: Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
}

// Task 4: Get books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(
      `${BASE_URL}/books/author/${author}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
}

// Task 5: Get books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(
      `${BASE_URL}/books/title/${title}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
