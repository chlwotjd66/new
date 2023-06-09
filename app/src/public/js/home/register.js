"use strict";

const id = document.querySelector("#id"),
     psword = document.querySelector("#psword"),
     name = document.querySelector("#name"),
     confirmPsword= document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    if(!id.value) return alert("아이디를 입력해주세요.");
    if(psword.value !== confirmPsword.value) {
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        id : id.value,
        psword : psword.value,
        name : name.value,
    };

    fetch("/register", { 
     method: "POST",
     headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
     if (res.success){
        location.bref = "/login";
         } else {
            if (res.err) return alert(res.err);
            alert(res.msg);
         }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}
    
//DOM -> Document Object Model이 js에서 html을 가져와 동작하게 함

