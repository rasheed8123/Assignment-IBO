/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/
const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

//1. finding the product count

const getUniqueProductCount = () => {
  let ProductCount = {}  // initializing result object 
  for (let i = 0; i < listOfProducts.length; i++) {
  // if the product is present in result object incrementing the count else we will store the the product and assign count to 1
    if (ProductCount[listOfProducts[i].productName] >= 1) {
      ProductCount[listOfProducts[i].productName]++;
    } else {
      ProductCount[listOfProducts[i].productName] = 1;
    }

  }
  return ProductCount
}



//2. finding the uniqueproducts 

const getUniquePrducts = () => {
  let UniqPrducts = []  // initializing result array
  for (let i = 0; i < listOfProducts.length; i++) {
    let flag = true
    for (let j = 0; j < UniqPrducts.length; j++) {
    // if the productsObject is present in the result array we will increment the quantity of that(previous ones) or else we will induce the new object in the array as it is.
      if (listOfProducts[i].productName === UniqPrducts[j].productName) {
        flag = false
        UniqPrducts[j].quantity += listOfProducts[i].quantity
        break;
      }
    }
    if (flag) {
      UniqPrducts.push(listOfProducts[i])
    }
  }
  return UniqPrducts
}




// consoling(displaying) the unique Product Count in an object 

console.log(getUniqueProductCount())

// consoling(displaying) the unique products in array

console.log(getUniquePrducts())
