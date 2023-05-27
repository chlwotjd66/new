"use strict";

const id = document.querySelector("#id"),
     pw = document.querySelector("#pw"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        pw : pw.value,
    };
    console.log(req)
}

fetch("/login", {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
    },

    body: JSON.stringify(req),
})
    
//DOM -> Document Object Model이 js에서 html을 가져와 동작하게 함

