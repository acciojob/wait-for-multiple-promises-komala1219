//your JS code here. If required.
// Select the output tbody element
const promises = [];

// generate 3 random promises
for (let i = 1; i <= 3; i++) {
  const promise = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
  promises.push(promise);
}

// show loading message
const loadingRow = document.createElement("tr");
const loadingCell = document.createElement("td");
loadingCell.setAttribute("colspan", "2");
loadingCell.textContent = "Loading...";
loadingRow.appendChild(loadingCell);
document.getElementById("output").appendChild(loadingRow);

// wait for all promises to resolve
Promise.all(promises)
  .then((times) => {
    // remove loading message
    document.getElementById("output").removeChild(loadingRow);

    // create rows for each promise and add to table
    for (let i = 1; i <= 3; i++) {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.textContent = "Promise " + i;
      const timeCell = document.createElement("td");
      timeCell.textContent = times[i-1];
      row.appendChild(nameCell);
      row.appendChild(timeCell);
      document.getElementById("output").appendChild(row);
    }

    // calculate and add total time row
    const totalTime = times.reduce((a, b) => a + b, 0);
    const totalRow = document.createElement("tr");
    const totalNameCell = document.createElement("td");
    totalNameCell.textContent = "Total";
    const totalTimeCell = document.createElement("td");
    totalTimeCell.textContent = totalTime.toFixed(3);
    totalRow.appendChild(totalNameCell);
    totalRow.appendChild(totalTimeCell);
    document.getElementById("output").appendChild(totalRow);
  })
  .catch((error) => {
    console.error(error);
  });

