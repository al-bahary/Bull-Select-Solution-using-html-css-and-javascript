function filterBulls() {
    const trait = document.getElementById('trait').value;
    const breed = document.getElementById('breed').value;
    const bullCards = document.querySelectorAll('.bull-card');
    
    bullCards.forEach(card => {
        const cardTrait = card.getAttribute('data-trait');
        const cardBreed = card.getAttribute('data-breed');
        
        if ((trait === 'all' || cardTrait === trait) && (breed === 'all' || cardBreed === breed)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
