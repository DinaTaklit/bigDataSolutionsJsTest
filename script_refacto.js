import data from './data.js'


// Function thart create the graph
const graph = () =>{
    const newData = dataWithAvgTotal() // get new data with average total
    const labels = graphLabels() // get graph labels
    console.log(newData)
    console.log(labels)
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