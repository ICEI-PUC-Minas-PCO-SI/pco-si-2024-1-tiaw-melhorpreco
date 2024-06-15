document.addEventListener("DOMContentLoaded", function() {
    const wishlistButtons = document.querySelectorAll(".wishlist-btn");
    updateWishlistButtons();

    wishlistButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.stopPropagation();
            const productId = button.getAttribute("data-id");
            toggleWishlist(productId, button);
        });
    });
});

function toggleWishlist(productId, button) {
    const wishlist = getWishlist();
    if (wishlist.includes(productId)) {
        // Remove da lista de desejos
        const index = wishlist.indexOf(productId);
        wishlist.splice(index, 1);
        button.style.color = '#000'; // Sem cor
    } else {
        // Adiciona a lista de desejos
        wishlist.push(productId);
        button.style.color = '#ff0000'; // Cor vermelha
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function getWishlist() {
    const wishlist = localStorage.getItem('wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
}

function updateWishlistButtons() {
    const wishlist = getWishlist();
    const buttons = document.querySelectorAll('.wishlist-btn');
    buttons.forEach(button => {
        const productId = button.getAttribute('data-id');
        if (wishlist.includes(productId)) {
            button.style.color = '#ff0000';
        } else {
            button.style.color = '#000';
        }
    });
}
