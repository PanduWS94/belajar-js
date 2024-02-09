const productBin = require('./resAPI.js');
let totalQuantity = 0;
productBin.data.forEach(item => {
    if (item.productCode === "FBR00040101") {
        totalQuantity += item.quantity;
    }
});
console.log('Total quantity untuk productCode FBR00040101 (FloBrand-DressBSPink) adalah:', totalQuantity);