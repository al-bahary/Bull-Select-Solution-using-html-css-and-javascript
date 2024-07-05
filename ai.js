function filterProviders() {
    const location = document.getElementById('location').value;
    const rating = document.getElementById('rating').value;
    const providerRows = document.querySelectorAll('.provider-row');
    
    providerRows.forEach(row => {
        const rowLocation = row.getAttribute('data-location');
        const rowRating = row.getAttribute('data-rating');
        
        if ((location === 'all' || rowLocation === location) && (rating === 'all' || rowRating === rating)) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}
