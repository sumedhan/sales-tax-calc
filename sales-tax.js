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
  var obj = {};

  return obj;
}

// HELPER FUNCTIONS
function calculateTax(taxRate, salesAmount){
  return taxRate * salesAmount;
}

function totalSales(companyName){ //prob become redundant
  var sum = 0;
  for (var i = 0; i < companySalesData.length; i++) {
    var companyObj = companySalesData[i];
    if (companyObj.name == companyName){
      for (var j = 0; j < companyObj.sales.length; j++) {
        sum = sum + companyObj.sales[j];
      }
    }
  }
  return sum;
}

function totalSalesByProv(companyName, province){
  var sum = 0;
  return sum;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

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