
document.addEventListener('DOMContentLoaded', function() {
    // Add the Search
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" id="search-bar" placeholder="Search for brushes...">
    `;
    
    // Search
    const header = document.getElementById('area-cabecalho');
    header.parentNode.insertBefore(searchContainer, header.nextSibling);
    
    // No result
    const noResults = document.createElement('div');
    noResults.id = 'no-results';
    noResults.className = 'no-results';
    noResults.textContent = 'No products found matching your search.';
    document.body.insertBefore(noResults, document.getElementById('item'));
    
    const searchBar = document.getElementById('search-bar');
    const items = document.getElementsByClassName('layout-item');
    const noResultsMsg = document.getElementById('no-results');
    
    // Event
    searchBar.addEventListener('keyup', function() {
        searchProducts();
    });
    
    // Search function
    function searchProducts() {

        let input = searchBar.value.toLowerCase();

        let visibleItems = 0;
        
        // Loop through all product items
        for (let i = 0; i < items.length; i++) {
            // Get the product name for this item
            let productName = items[i].getElementsByClassName('p-name')[0].textContent.toLowerCase();
            
            // Check if the product name includes the search term
            if (productName.includes(input)) {
                items[i].style.display = ''; // Show the item
                visibleItems++;
            } else {
                items[i].style.display = 'none'; // Hide the item
            }
        }
        
        // Show or hide the no results message
        if (visibleItems === 0 && input.length > 0) {
            noResultsMsg.style.display = 'block';
        } else {
            noResultsMsg.style.display = 'none';
        }
    }
    
    // Change all p-name IDs to classes (since IDs should be unique)
    const pNames = document.querySelectorAll('[id="p-name"]');
    pNames.forEach(el => {
        el.removeAttribute('id');
        el.classList.add('p-name');
    });
});