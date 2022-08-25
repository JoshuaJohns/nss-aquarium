
export const Fish = (fishObject) => {
    return `<article class="fishCard">
            <div><img class="fish__image" src="images/${fishObject.image}" /></div>
            <div class="fish__name">${fishObject.name}</div>
            <div class="fish__species">${fishObject.species}</div>
            <div class="fish__length">${fishObject.length}</div>
            <div class="fish__location">${fishObject.harvestLocation}</div>
            <div class="fish__diet">${fishObject.food}</div>
        </article>`
}











