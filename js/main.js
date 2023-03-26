let section1=document.querySelector(".Rating")
let radio1 = document.getElementsByName("rate");
let section2 = document.querySelector(".Rating__state");
let state = document.querySelector(".state");    

let f = document.querySelector("form")
f.addEventListener("submit", function (e) {
    for (let i = 0; i < radio1.length; i++) {
        console.log(radio1[i]);
        if (radio1[i].checked) {
            state.innerHTML = `You selected ${i + 1} out of 5`;
            section2.style.display = "block";
            section1.style.display="none"
        }
    }
    e.preventDefault()
    
})
