const productBin = require('./resAPI.js');
const prompt = require('prompt-sync')();

function tampilkanListProduk() {
    console.log('List productId:');
    productBin.data.forEach(item => {
        console.log(item.productId);
    });
}

function hitungTotalQuantity() {
    let totalQuantity = 0;
    productBin.data.forEach(item => {
        if (item.productCode === "FBR00040101") {
            totalQuantity += item.quantity;
        }
    });
    console.log('Total quantity untuk productCode FBR00040101 adalah:', totalQuantity);
}

function programBerjalan() {
    let isRunning = true;

    while (isRunning) {
        console.log('\nPilihan:');
        console.log('1. List-id untuk "productId"');
        console.log('2. Total untuk "totalQuantity"');

        const choice = prompt('Masukkan pilihan Anda (1/2), type "close" untuk keluar: ');

        switch (choice.toLowerCase()) {
            case '1':
                tampilkanListProduk();
                break;
            case '2':
                hitungTotalQuantity();
                break;
            case 'close':
                isRunning = false;
                console.log('Terima kasih!');
                break;
            default:
                console.log('Pilihan tidak valid.');
        }
    }
}
programBerjalan();