# Graph Test

Please refactor the code in scirpt.js to make it clean and readable (you can use ES6 syntax)

## Code Explanation

- Keep the same logic as the old one but refactor it with the new **es6** syntax with some optimization
- Separate the data into another file `data.js`
- Move the graph strucure as a global variable to make things clean
- Separate the logic into separte functions to sparate concerns and implement pure function that can be later be composed to create hole app
- I used comments to explain almost each line of code

### Functions

- `dataWithAvgTotal` function: map the old data records into new object that contains a new property *avg_total* that calculate the average values of items. The function return the new data

- `graphLabels` function: map the data items to get the labels of the graph which are the period.
  
- `graphDataset` take as argument the data keys (include average total and exclude period key) and the new generated data from `dataWithAvgTotal` to create the dataset. The function loop throw the keys and for each key, it use reduce function to create the new item that contains the an array of data values for each key from the whole dataset. The strucure of the graph dataset is the following:

    ```json
    {
        label: "", 
        data: [],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
        ], 
    }
    ```

- `graphChart` function: take as an argument the lables generated from `graphLabels` function and the dataset generated from `graphDataset` function and create the chart and display it.
  
- `graph` function: make call of the 03 previous functions to create the graph.

> The index file contains the two graphs with the old and new script just to check that I am getting the same result.
