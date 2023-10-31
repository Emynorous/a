document.addEventListener("DOMContentLoaded", function() {
    const itemNameInput = document.getElementById("item-name");
    const itemQuantityInput = document.getElementById("item-quantity");
    const addButton = document.getElementById("add-button");
    const shoppingList = document.getElementById("shopping-list");

    addButton.addEventListener("click", function() {
        const itemName = itemNameInput.value;
        const itemQuantity = itemQuantityInput.value;

        if (itemName.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${itemName} (${itemQuantity})</span>
                <span class="item-actions">
                    <button class="delete-button">Smazat</button>
                </span>
            `;

            shoppingList.appendChild(listItem);

            itemNameInput.value = "";
            itemQuantityInput.value = "";
        }
    });

    shoppingList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-button")) {
            event.target.parentElement.parentElement.remove();
        }
    });
});
