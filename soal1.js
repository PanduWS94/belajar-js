const prompt = require('prompt-sync')({ sigint: true });

while (true) {
    const input = prompt('Masukkan bilangan genap positif atau ketik "close" untuk keluar: ');

    if (input.toLowerCase() === 'close') {
        console.log('Aplikasi ditutup. Terima kasih!');
        break;
    }    
    if (/^[a-zA-Z]+$/.test(input)) {
        console.log('Tidak boleh input huruf');
        continue;
    }
    const x = parseInt(input);
    if (x < 0) {
        console.log('Tidak boleh input angka negatif');
        continue;
    }
    if (x == 0) {
        console.log('jawabannya akar pangkat 2 dari 0 adalah 0');
        continue;
    } else if (x % 2 !== 0) {
        console.log('Tidak boleh input angka ganjil');
        continue;
    }
    const result = Math.sqrt(x);
    console.log(`Jawaban akar pangkat 2 dari ${x} adalah ${result}`);
}