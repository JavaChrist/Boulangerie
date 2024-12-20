document.getElementById('produits-link').addEventListener('mouseover', function() {
    const produitsModal = document.getElementById('produits-modal');
    const fournilModal = document.getElementById('fournil-modal');
    
    fournilModal.style.display = 'none';
    const rect = this.getBoundingClientRect();
    produitsModal.style.display = 'block';
    produitsModal.style.left = rect.left + 'px';
    produitsModal.style.top = rect.bottom + 'px';
});

document.getElementById('fournil-link').addEventListener('mouseover', function() {
    const produitsModal = document.getElementById('produits-modal');
    const fournilModal = document.getElementById('fournil-modal');
    
    produitsModal.style.display = 'none';
    const rect = this.getBoundingClientRect();
    fournilModal.style.display = 'block';
    fournilModal.style.left = rect.left + 'px';
    fournilModal.style.top = rect.bottom + 'px';
});

document.getElementById('produits-modal').addEventListener('mouseleave', function() {
    this.style.display = 'none';
});

document.getElementById('fournil-modal').addEventListener('mouseleave', function() {
    this.style.display = 'none';
});

// Fermer la modale si l'utilisateur clique en dehors
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

document.querySelectorAll('.card-content button').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        window.location.href = `produit.html?id=${productId}`;
    });
});
