document.getElementById('btn').addEventListener('click', () => {
    function validateEmail(email) {
        var padrao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        return padrao.test(email);
    };

    let email = document.getElementById('email');
    let errorParagraph = document.getElementById('paragraph');
    let sectionNewsletter = document.getElementById('section-newsletter');
    let sectionThanks = document.getElementById('section-thanks')
    if(validateEmail(email.value)) {
        email.classList.remove('error')
        email.classList.add('email')
        errorParagraph.classList.remove('show')
        errorParagraph.classList.add('to-hide')
        sectionNewsletter.classList.remove('main-section')
        sectionNewsletter.classList.add('to-hide')
        sectionThanks.classList.remove('to-hide')
        sectionThanks.classList.add('show')
    } else{
        email.classList.remove('email')
        email.classList.add('error')
        errorParagraph.classList.remove('to-hide')
        errorParagraph.classList.add('show')
    }

    let thanksSpan = document.getElementById('email-user');
    thanksSpan.innerHTML = email.value

    document.getElementById('btn-thanks').addEventListener('click', () => {
        sectionNewsletter.classList.remove('to-hide')
        sectionNewsletter.classList.add('main-section')
        sectionThanks.classList.remove('show')
        sectionThanks.classList.add('to-hide')
        email.value = "";
    });
});



