const form = document.querySelector('form');
const item_name = document.getElementById('cost-field');
const item_cost = document.getElementById('item-cost');
const error = document.getElementById('error');


form.addEventListener('submit', (e) => {

    e.preventDefault();
    console.log(db);


    if (item_name.value && item_cost.value) {

        const item = {
            name: item_name.value,
            cost: parseInt(item_cost.value)
        }

        db.collection('expenses').add(item)
        .then( res => {
            item_cost.value = "";
            item_name.value = ""
        })

        error.style.display = "none"
    } else {
        error.style.display = "block" 
    }

})




