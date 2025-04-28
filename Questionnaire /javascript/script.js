document.getElementById("surveyForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const formData = new FormData(this);
    const color = formData.get("color");
    const food = formData.get("food");
    const sport = formData.get("sport");

    const table = document.getElementById("resultsTable").querySelector("tbody");
    const newRow = table.insertRow();
    
    newRow.innerHTML = `
        <td>${color}</td>
        <td>${food}</td>
        <td>${sport}</td>
    `;
    this.reset();
});
