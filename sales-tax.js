var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var obj = createOutputObjects(salesData);
  for (var companyName in obj){
    obj[companyName].totalSales = totalSales(companyName, salesData);
    obj[companyName].totalTaxes = addTaxes(companyName, compProvs(salesData, companyName), salesData);
  }
  return obj;
}

// HELPER FUNCTIONS
function addTaxes(companyName, companyProvs, salesData){
  var sum = 0;
  for (var i = 0; i < companyProvs.length; i++) {
    sum += calculateTax(findTaxRate(companyProvs[i]), totalSalesByProv(companyName, companyProvs[i], companySalesData));
  }
  return sum;
}


function compProvs(salesData, companyName){
  var companyProvs = [];
  for (var i = 0; i < salesData.length; i++) {
    var companyObj = salesData[i];
    if (companyObj.name == companyName){
      companyProvs.push(companyObj.province);
    }
  }
  return companyProvs;
}


function calculateTax(taxRate, salesAmount){
  return taxRate * salesAmount;
}

function totalSalesByProv(companyName, province, salesData){
  var sum = 0;
  for (var i = 0; i < salesData.length; i++) {
    var companyObj = salesData[i];
    if (companyObj.name == companyName && companyObj.province == province){
      for (var j = 0; j < companyObj.sales.length; j++) {
        sum = sum + companyObj.sales[j];
      }
    }
  }
  return sum;
}

function totalSales(companyName, salesData){
  var sum = 0;
  for (var i = 0; i < salesData.length; i++) {
    var companyObj = salesData[i];
    if (companyObj.name == companyName){
      for (var j = 0; j < companyObj.sales.length; j++) {
        sum = sum + companyObj.sales[j];
      }
    }
  }
  return sum;
}

function findTaxRate(province){
  for (var prov in salesTaxRates){
    if (prov == province){
      return salesTaxRates[prov];
    }
  }
}

function createOutputObjects(salesData){
  var obj = {};
  for (var i = 0; i < salesData.length; i++) {
    var companyName = salesData[i].name;
    if (!obj[companyName]){
      obj[companyName] = {
        totalSales: 0,
        totalTaxes: 0
      };
    }
  }
  return obj;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/