document.addEventListener("DOMContentLoaded", function () {
    const createAccountButton = document.querySelector(".btn-outline-warning");
    createAccountButton.addEventListener("click", function () {
        $('#registerModal').modal('show');
    });
});
