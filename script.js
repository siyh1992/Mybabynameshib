
function filterTable() {
    const input = document.getElementById("search");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("namesTable");
    const trs = table.getElementsByTagName("tr");

    for (let i = 1; i < trs.length; i++) {
        let tds = trs[i].getElementsByTagName("td");
        let match = false;
        for (let j = 0; j < tds.length; j++) {
            if (tds[j].textContent.toLowerCase().indexOf(filter) > -1) {
                match = true;
                break;
            }
        }
        trs[i].style.display = match ? "" : "none";
    }
}
