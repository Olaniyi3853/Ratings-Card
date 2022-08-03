const submitBtn = document.querySelector(".submit");
const showModal = document.querySelector(".modal-two");
const ratings = document.querySelector(".rate-number");
const number = document.querySelectorAll(".number");
let valueRating;



number.forEach((button) => button.addEventListener("click", function(e){

    valueRating = button.textContent;
    
}));



submitBtn.addEventListener('click', function(){

    if (!valueRating){
        alert("Kindly select your rating")
    }
    else{
        showModal.classList.add('show-modal')
    }

    ratings.textContent = valueRating;

});




