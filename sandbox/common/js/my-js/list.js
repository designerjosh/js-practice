
//
const form = document.querySelector('#headerForm');
const input = document.querySelector('#newListItem');
const list = document.querySelector('#list');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const itemName = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = itemName;
    console.log(newLi);
    list.append(newLi);
    input.value = "";

    // console.log("SUBMITTED!");
});

form.addEventListener('input', function(e) {
    console.log(e);
    h3.innerText = input.value;
});

form.addEventListener('input', function(e) {
    console.log(e);
    h2.innerText = e.data;
});

list.addEventListener('click', function(e) {
    console.log(e)
    // e.target.nextElementSibling.tagName === 'LI' && e.target.nextElementSibling.remove();
})


document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll("#list li");

    listItems.forEach(li => {
        li.addEventListener("click", function(event) {
            // Calculate the click position relative to the <li> element
            const liRect = li.getBoundingClientRect();
            const liStyle = getComputedStyle(li);
            const bulletOffset = parseFloat(liStyle.paddingLeft) + parseFloat(liStyle.marginLeft);

            // Check if the click was on the bullet area
            if (event.clientX < liRect.left + bulletOffset) {
                li.remove();
            }
        });
    });
});