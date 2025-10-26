const list = document.getElementById("charList");

async function updateList () {
    const response = await fetch('/api/chars');
    const data = await response.json();

    data.forEach(char => {
        const li = document.createElement("li");
        li.textContent = `${char.name} (${char.alliance})`;
        list.appendChild(li);
    });

}

updateList();