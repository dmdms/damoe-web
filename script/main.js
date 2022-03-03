"use strict"
function open_mailer(){ /*모달 팝업창 보여줌*/ 
    let modal = document.querySelector("#modal")
    modal.style.display = "block" 
}
/* function : 기능, function 사용은 기능의 이름(); */
function close_mailer(){ /*모달 팝업창 감춤*/ 
    let close = document.querySelector(".close-modal")
    let modal = document.querySelector("#modal")
    close.addEventListener("click", function(){
    modal.style.display = "none";
    })
}
close_mailer(); //모달 닫기 기능 실행

function address_find(){
    alert("DB 점검으로 인해 해당 서비스 이용이 불가능합니다.")
}