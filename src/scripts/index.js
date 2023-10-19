function handleModal(){
    const modalButtonHeader = document.querySelector(".header__button--default")
    const modalButtonFaq = document.querySelector(".faq__button--brand-default")
    const modalController = document.querySelector("#modalController")

    modalButtonHeader.addEventListener("click", function(){
        modalController.showModal()

        closeModal()
    })

    modalButtonFaq.addEventListener("click", function(){
        modalController.showModal()

        closeModal()
    })
}

handleModal()

function closeModal(){
    const closeModalButton = document.querySelector("#closeModal")
    const modalController = document.querySelector("#modalController")

    closeModalButton.addEventListener("click", function(){
        modalController.close()

    })
}