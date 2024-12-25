// Charger les données du produit
fetch('produits.json')
    .then(response => response.json())
    .then(products => {
        console.log(products); // Vérifiez que les produits sont bien chargés

        // Obtenir l'ID du produit à partir de l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        console.log('Product ID:', productId); // Vérifiez l'ID

        // Trouver le produit correspondant
        const product = products.find(p => p.id == productId);
        console.log('Product:', product); // Vérifiez le produit trouvé

        if (product) {
            // Mettre à jour le contenu de la page avec les détails du produit
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-image').src = product.image;

            // Ajouter l'icône avant l'info
            const iconElement = document.createElement('img');
            iconElement.src = product.image2; // Utiliser l'icône du produit
            iconElement.alt = 'Icône végétarien';
            iconElement.classList.add('product-icon');
            document.getElementById('product-info').before(iconElement);

            document.getElementById('product-info').textContent = product.info;
            document.getElementById('product-description').innerHTML = product.description.replace(/\\n/g, '<br>');

            const modalText = document.getElementById('modal-text');

            document.getElementById('composition-link').addEventListener('click', function () {
                const composition = product.composition;
                let tableHtml = `<strong>${composition.description}</strong><br><table>`;

                composition.values.forEach(row => {
                    tableHtml += '<tr>';
                    row.forEach(cell => {
                        tableHtml += `<td>${cell}</td>`;
                    });
                    tableHtml += '</tr>';
                });

                tableHtml += '</table>';
                modalText.innerHTML = tableHtml;
            });
            document.getElementById('allergenes-link').addEventListener('click', function () {
                modalText.innerHTML = 'Allergènes: ' + product.allergenes.replace(/\\n/g, '<br>');
            });
            document.getElementById('conservation-link').addEventListener('click', function () {
                modalText.innerHTML = 'Conservation: ' + product.conservation.replace(/\\n/g, '<br>');
            });
        } else {
            // Gérer le cas où le produit n'est pas trouvé
            document.querySelector('.product-details').textContent = "Produit non trouvé.";
        }
    })
    .catch(error => console.error('Erreur lors du chargement des produits:', error));

document.getElementById('product-info-button').addEventListener('click', function () {
    document.getElementById('product-modal').style.display = 'block';
});

window.addEventListener('click', function (event) {
    const modal = document.getElementById('product-modal');
    const modalContent = document.querySelector('.modal-content');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});