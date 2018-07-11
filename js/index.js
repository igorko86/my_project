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
    let bool = true; 
    if(bool){
        $('#exampleModal').modal("show");  
    }
    document.querySelector("#hideBootSTModal").onclick = function(){
        $("#exampleModal").modal("hide");
        bool = false;
    }
    
}, 4000);
function getFetchHtml(){
     fetch("modal.html").then(response => response.text()).then( modal => document.querySelector(".modal-fetch").innerHTML = modal);
}
getFetchHtml();
function makeElement(){
    const elDiv = document.createElement("div");
    elDiv.classList.add("modal-fetch");
    document.querySelector("body").appendChild(elDiv);
}
makeElement();

function hideBootSTModal(){
    $("#exampleModal").modal('hide');
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
    if(userName != ""){
        let users = {};
        users.name = userName;
        users.message = message;
        let i = arrUser.length;
        arrUser[i] = users;
        showMessage();
        localStorage.setItem("messages", JSON.stringify(arrUser));
        elInp.value = "";
        elTexterea.value = "";
    }else{
        
    }
    
}
function showMessage(){
    let out = '';
    for(let key in arrUser){
       out += "<p class='user-name'>"+arrUser[key].name+"</p>" + "<p class='user-message'>"+arrUser[key].message+"</p>"; 
    }
    document.querySelector("#message").innerHTML = out;
}
