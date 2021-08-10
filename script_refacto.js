import data from './data.js'

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
