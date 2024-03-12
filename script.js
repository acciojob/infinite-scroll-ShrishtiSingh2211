//your code here!
function addListItem() {
  // Get the list element
  var list = document.getElementById('list');

  // Create a new list item
  var newItem = document.createElement('li');

  // Add some text to the list item
  newItem.textContent = 'New item';

  // Append the new list item to the list
  list.appendChild(newItem);
}

// Add 10 list items when the page loads
for (var i = 0; i < 10; i++) {
  addListItem();
}
window.addEventListener('scroll', function() {
  // If the user has scrolled to the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Add two new list items
    addListItem();
    addListItem();
  }
});
