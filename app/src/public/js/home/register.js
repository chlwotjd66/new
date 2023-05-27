"use strict";

const id = document.querySelector("#id"),
     pw = document.querySelector("#pw"),
     nikname = document.querySelector("#nikname"),
     confirmPw = document.querySelector("#confirm-pw"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    const req = {
        id : id.value,
        pw : pw.value,
        nikname : nikname.value,
        confirmPw : confirmPw.value
    };
    console.log(req);
    fetch("/register", { 
     method: "POST",
     headers: {
            "Content-Type" : "application/json",
        },

        body: JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
     if (res.success){
        location.bref = "/login";
         } else {
            alert(res.msg);
         }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}
    
//DOM -> Document Object Model이 js에서 html을 가져와 동작하게 함

