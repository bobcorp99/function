do {
    let num = prompt('Istalgan sonni kiriting')
    if (num % 2 == 0 && num > 0) {
        alert('Soningiz juft')
    } else if (num % 2 != 0 && num > 0) {
        alert('Soningiz toq')
    } else {
        alert('Xato narsa kiritdingiz iltimos son kiriting!')
    }
} while (true)