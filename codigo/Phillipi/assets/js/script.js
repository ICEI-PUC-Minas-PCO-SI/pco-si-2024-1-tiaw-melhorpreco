var modal = document.getElementById('notificationModal');
var btn = document.getElementById("openModalButton");
var activateBtn = document.getElementById("activateNotificationButton");
var span = document.getElementsByClassName("close")[0];
var notificationText = document.getElementById("notificationText");
var notificationIcon = document.getElementById("notificationIcon");
var clearNotificationBtn = document.getElementById("clearNotificationButton"); // Botão para limpar a notificação

btn.onclick = function() {
    modal.style.display = "block";
    var buttonRect = btn.getBoundingClientRect();
    modal.style.top = buttonRect.bottom + "px";
    modal.style.left = buttonRect.left + "px";
}

activateBtn.onclick = function() {
    notificationIcon.style.display = "block"; // Exibe o ícone quando o botão é clicado
    var message = "Um item da sua lista de desejos está em promoção";
    notificationText.textContent = message;
    notificationIcon.src = "assets/img/icon_notif_active.png"; // Altera para o ícone específico para notificações ativadas
    modal.style.display = "block";
    var buttonRect = activateBtn.getBoundingClientRect();
    modal.style.top = buttonRect.bottom + "px";
    modal.style.left = buttonRect.left + "px";

    // Altera a imagem do sino
    btn.querySelector("img").src = "assets/img/sino_active.png";
}

span.onclick = function() {
    modal.style.display = "none";
}

clearNotificationBtn.onclick = function() {
    modal.style.display = "none"; // Fecha o modal ao clicar no botão "X"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}