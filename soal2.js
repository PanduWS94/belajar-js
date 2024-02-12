const productBin = require('./resAPI.js');
const prompt = require('prompt-sync')();

function tampilkanListId() {
    console.log('List Id:');
    productBin.data.forEach(item => {
        console.log(item.id);
    });
}

function tampilkanListStorageId() {
    console.log('List Storage Id:');
    productBin.data.forEach(item => {
        console.log(item.storageId);
    });
}

function tampilkanListCode() {
    console.log('List Code:');
    productBin.data.forEach(item => {
        console.log(item.code);
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
        console.log('1. List "Id"');
        console.log('2. List "Storage Id')
        console.log('3. List "Code"')
        console.log('4. Total dari "Total Quantity"');

        const choice = prompt('Masukkan pilihan Anda (1/2/3/4), type "close" untuk keluar: ');

        switch (choice.toLowerCase()) {
            case '1':
                tampilkanListId();
                break;
            case '2':
                tampilkanListStorageId();
                break;
            case '3':
                tampilkanListCode();
                break;
            case '4':
                hitungTotalQuantity();
                break;
            case 'close':
                isRunning = false;
                console.log('Terima kasih sudah menggunakan aplikasi saya!');
                break;
            default:
                console.log('Pilihan tidak valid, coba kembali.');
        }
    }
}
programBerjalan();