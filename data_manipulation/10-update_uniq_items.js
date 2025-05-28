import groceriesList from "./9-groceries_list.js";


function updateUniqueItems(map) {
    try {
        map.forEach((value, key)=>{
            if (value === 1) {
                map.set(key, 100);
            } else {
                map.set(key, value+1);
            }
        })
    } catch (e) {
        throw new Error('Cannot process');
    }
}

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);
