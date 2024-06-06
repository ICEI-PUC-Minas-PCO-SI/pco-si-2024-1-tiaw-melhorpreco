document.addEventListener("DOMContentLoaded", function () {
    function rateProduct() {
        const stars = document.querySelectorAll("#stars li");
        stars.forEach((star, index) => {
            star.addEventListener("click", function () {
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add("rated");
                }
                for (let i = index + 1; i < stars.length; i++) {
                    stars[i].classList.remove("rated");
                }
            });
        });
    }
    function buyProduct() {
        alert("Produto comprado com sucesso!");
    }
    function saveData() {
        const productData = {
            name: "Galaxy S24 Ultra",
            description: "Smartphone Samsung Galaxy S24 Ultra 6,8 Galaxy AI 512GB Titânio Cinza 5G 12GB RAM Câm. Quádrupla 200MP + Selfie 12MP Bateria 5000mAh Dual Chip",
            price: "R$ 9.899,10",
            stars: getRatedStars()
        };
        localStorage.setItem("productData", JSON.stringify(productData));
    }
    function getRatedStars() {
        const stars = document.querySelectorAll("#stars li");
        let ratedStars = 0;
        stars.forEach(star => {
            if (star.classList.contains("rated")) {
                ratedStars++;
            }
        });
        return ratedStars;
    }
    rateProduct();
    document.querySelector(".buy").addEventListener("click", buyProduct);
    document.querySelector(".buy").addEventListener("click", saveData);
});