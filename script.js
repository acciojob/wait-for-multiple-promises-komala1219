//your JS code here. If required.
// Select the output tbody element
const output = document.querySelector('#output');

// Create an array of 3 Promises
const promises = [
  new Promise((resolve) => setTimeout(() => resolve(1), Math.random() * 2000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), Math.random() * 2000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve(3), Math.random() * 2000 + 1000)),
];

// Add the loading row to the table
const loadingRow = document.createElement('tr');
const loadingCell = document.createElement('td');
loadingCell.setAttribute('colspan', '2');
loadingCell.innerText = 'Loading...';
loadingRow.appendChild(loadingCell);
output.appendChild(loadingRow);

// Wait for all the Promises to resolve using Promise.all
Promise.all(promises)
  .then((results) => {
    // Remove the loading row from the table
    output.removeChild(loadingRow);

    // Add the Promise 1 row to the table
    const promise1Row = document.createElement('tr');
    const promise1Name = document.createElement('td');
    const promise1Time = document.createElement('td');
    promise1Name.innerText = 'Promise 1';
    promise1Time.innerText = `${results[0]}`;
    promise1Row.appendChild(promise1Name);
    promise1Row.appendChild(promise1Time);
    output.appendChild(promise1Row);

    // Add the Promise 2 row to the table
    const promise2Row = document.createElement('tr');
    const promise2Name = document.createElement('td');
    const promise2Time = document.createElement('td');
    promise2Name.innerText = 'Promise 2';
    promise2Time.innerText = `${results[1]}`;
    promise2Row.appendChild(promise2Name);
    promise2Row.appendChild(promise2Time);
    output.appendChild(promise2Row);

    // Add the Promise 3 row to the table
    const promise3Row = document.createElement('tr');
    const promise3Name = document.createElement('td');
    const promise3Time = document.createElement('td');
    promise3Name.innerText = 'Promise 3';
    promise3Time.innerText = `${results[2]}`;
    promise3Row.appendChild(promise3Name);
    promise3Row.appendChild(promise3Time);
    output.appendChild(promise3Row);

    // Add the Total row to the table
    const totalTime = results.reduce((sum, time) => sum + time, 0);
    const totalRow = document.createElement('tr');
    const totalName = document.createElement('td');
    const totalTimeCell = document.createElement('td');
    totalName.innerText = 'Total';
    totalTimeCell.innerText = `${totalTime.toFixed(3)}`;
    totalRow.appendChild(totalName);
    totalRow.appendChild(totalTimeCell);
    output.appendChild(totalRow);
  })
  .catch((error) => {
    console.error(error);
  });
