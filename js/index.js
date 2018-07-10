document.querySelectorAll(".block-sign-up a").forEach(el => el.addEventListener("click", showModal));  
document.querySelector(".wrap-icon-signUp").addEventListener("click",hideModal);
document.querySelector(".wraper-icon-login").addEventListener("click",hideModal);
document.querySelectorAll(".hideModal").forEach(el => el.addEventListener("click",hideModal));
document.querySelector(".register").addEventListener("click",showLogin);
function showModal(e){
    e.preventDefault();
    if(e.target.className === ".show-signUp"){
        document.querySelector(".wraper-modal-signUp").classList.add("activeForm");
    }else{
      document.querySelector(".wraper-modal-login").classList.add("activeForm");
    }
}

function hideModal(){
   document.querySelector(".wraper-modal-signUp").classList.remove("activeForm");
   document.querySelector(".wraper-modal-login").classList.remove("activeForm");
}
function showLogin(){
  hideModal();
  document.querySelector(".wraper-modal-login").classList.add("activeForm");
}
let timer = setTimeout(function(){
    makeElement();
    fetch("modal.html").then(response => response.text()).then( modal => document.querySelector(".modal-fetch").innerHTML = modal)
    $('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
}, 4000);
function makeElement(){
    const elDiv = document.createElement("div");
    elDiv.classList.add("modal-fetch");
    document.querySelector("body").appendChild(elDiv);
}
let arrUser = [];
if(localStorage.getItem("messages") != undefined){
    arrUser = JSON.parse(localStorage.getItem("messages"));
    showMessage();
}
document.querySelector("#but-coment").onclick = function(e){
    e.preventDefault();
    const elInp= document.querySelector("#name");
    const elTexterea = document.querySelector("#questions");
    let userName = elInp.value;
    let message = elTexterea.value;
    let users = {};
    users.name = userName;
    users.message = message;
    let i = arrUser.length;
    arrUser[i] = users;
    showMessage();
    localStorage.setItem("messages", JSON.stringify(arrUser));
    elInp.value = "";
    elTexterea.value = "";
}
function showMessage(){
    let out = '';
    for(let key in arrUser){
       out += arrUser[key].name +"<br>"+ arrUser[key].message+"<br>" ; 
    }
    document.querySelector("#message").innerHTML = out;
}