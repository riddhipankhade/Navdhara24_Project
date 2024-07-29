const cards = document.querySelectorAll('.card')

/*made a constant and entry represents space for card
  and entries represents space for cards*/
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         entry.target.classList.toggle("show", entry.isIntersecting)
//     })
// })

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
}, {
    threshold: 1
})



// const lastCardObserver = new IntersectionObserver(entries => {
//     const lastCard = entries[0]
//     if(!lastCard.isIntersecting) return
//         loadNewCards()
//         lastCardObserver.unobserve(lastCard.target)
//         lastCardObserver.observe(document.querySelector('.card:last-child'))
    
// })
//https://www.youtube.com/watch?v=2IbRtjez6ag
// lastCardObserver.observe(document.querySelector('.card:last-child'))

cards.forEach(card => {
    observer.observe(card)
})



// const cardContainer = document.querySelector('.container')

// function loadNewCards(){
//     for(var i = 0; i<10; i++){
//         const card = document.createElement("div")
//         card.classList.add("card")
//         card.textContent("New Card")
//         observer.observe(card)
//         cardContainer.append(card)
//     }
// }