// Selecting popup elements
const popupOverlay = document.querySelector(".popup-overlay");
const popupBox = document.querySelector(".popup-box");
const addPopupButton = document.getElementById("add-popup");
const cancelButton = document.getElementById("cancel-book");

// Show popup when + is clicked
addPopupButton.addEventListener("click", () => {
  popupOverlay.style.display = "block";
  popupBox.style.display = "block";
});

// Hide popup on cancel
cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
});

// Select form inputs
const container = document.querySelector(".container");
const addBook = document.getElementById("add-book");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-aurthor");
const bookDescription = document.getElementById("book-description");

// Handle add book
addBook.addEventListener("click", (event) => {
  event.preventDefault();

  if (bookTitle.value.trim() === "" || bookAuthor.value.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book-container");

  bookDiv.innerHTML = `
    <h2>${bookTitle.value}</h2>
    <h5>${bookAuthor.value}</h5>
    <p>${bookDescription.value}</p>
    <button onclick="deleteBook(event)">Delete</button>
  `;

  container.appendChild(bookDiv);

  // Close popup and clear inputs
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
  bookTitle.value = "";
  bookAuthor.value = "";
  bookDescription.value = "";
});

// Delete book function
function deleteBook(event) {
  event.target.parentElement.remove();
}
