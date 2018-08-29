document.addEventListener("DOMContentLoaded", function() {
    //dropdown menu
    const menuTriggerEl = document.querySelector(".menu-trigger-element");
    const nestedMenu = document.querySelector(".nested-menu");

    menuTriggerEl.addEventListener("mouseover", function() {
             nestedMenu.style.display = "block";
    });
    nestedMenu.addEventListener("mouseout", function() {
             this.style.display = "none";   
    })
    
    // read more/less btn
    const readMoreLessBtns = document.querySelectorAll('.read-more-less-btn');

    for(let i=0; i < readMoreLessBtns.length; i++) {
        readMoreLessBtns[i].addEventListener('click', showHideText);
    }
    
    function showHideText() {
        let prevSibling = this.previousElementSibling;
        
        if (prevSibling.style.display === "none" || prevSibling.style.display === "") {
            prevSibling.style.display = "block";
            readMoreLessBtn.textContent = "Czytaj mniej";
        } else {
            prevSibling.style.display = "none";
            readMoreLessBtn.textContent = "Czytaj więcej";
        }
    }
    
    //newsletter
    const formInput = document.querySelector('.newsletter-form input');
    const formBtn = document.querySelector('.newsletter-form button');
    const formInfo = document.querySelector('.form-info');
        
    formBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (formInput.value !== "") {
            formInfo.textContent = "Dodano adres email do subskrybcji.";
            formInput.value = "";
        } else {
            formInfo.textContent = "Nie podałeś adresu email.";
        }
        formInfo.style.display = "block";
    });
    
}); 