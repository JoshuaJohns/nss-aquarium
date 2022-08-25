// import { getFish } from "./database.js";
// import { Fish } from "./Fish.js";

// export const FishList = () => {
//     const contentElement = document.querySelector('.fishList');
//     const allFish = getFish()
//     let fishHtml = ''
//     for (const x of allFish) {
//         fishHtml += Fish(x)
//     }
//     contentElement.innerHTML += `${fishHtml}`
// }



import { getFish } from "./database.js"

export const FishList = () => {
    const parentHTMLElement = document.querySelector(".fishList")
    const fishes = getFish()
    let htmlString = ''
    fishes.map(fish => {
        htmlString += `<section class="fish-card">
        <div><img class="fish__image" src="images/${fish.image}" /></div>
        <li class="card-li"><b>Name:</b> ${fish.name}</li>
        <li class="card-li"><b>Species:</b> ${fish.species}</li>
        <li class="card-li"><b>Length:</b> ${fish.length}in</li>
        <li class="card-li"><b>Located:</b> ${fish.location}</li>
        <li class="card-li"><b>Diet:</b> ${fish.food}</li>
        </section>
        `
    })

    parentHTMLElement.innerHTML += `${htmlString}`


}
