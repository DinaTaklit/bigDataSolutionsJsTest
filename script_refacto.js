import data from './data.js'

// DataSet strucutre 
const datasetStructure = {
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

// Function that create the graph
const graph = () =>{
    const newData = dataWithAvgTotal() // get new data with average total
    const labels = graphLabels() // get graph labels

    let keys = Object.keys(newData[0]) // get the keys of the object
    keys = keys.filter(key => key !== 'period') //  exclude the period key

    const dataset = graphDataset(keys, newData) // get the dataset
    graphChart(labels, dataset) // create the graph
}

// Function that create the graph chart
const graphChart = (labels, graphValues) => {
  const ctx = document.getElementById('newChart').getContext('2d');
  var newChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: graphValues
    }
  });
}

// Function that create the graph Dataset
const graphDataset = (keys, data) => {
    // Loop through all the keys
    const dataset = keys.map(key => {
        // For each key add all it is value from the whole data
        const newItem = data.reduce((newItem, item) => {
            return {
                ...newItem,
                data: [...newItem.data, item[key]] // append the item value
            }
        }, datasetStructure)
        
        // reuturn the newItem
        return {
            ...newItem,
            label: key,
        }

    })
    return dataset
}

// Function that geenrate the average total of each record
const dataWithAvgTotal = () => {
    // array of the average values of each data record
    const newdata = data.map(item => {
        const keys = Object.keys(item) // get the keys of the object
        // claculate the total of the object items using reduce function
        const total = keys.reduce((total, key) => {
             if (key !== 'period') { // exclude the period key
                 return total + item[key]
             } 
             return total
         }, 0)   
         return {
            ...item,
            "avgTotal":total / (keys.length - 1) //  average value
         }
     })
    return newdata
}

// Function that generate the graph labels
const graphLabels = () => {
    // map through the array of data to get the period label
    const labels = data.map(item => {
        return item.period // return the period value
    })
    return labels
}

graph()
