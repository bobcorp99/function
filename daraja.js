var n = 1
do {
    var son = prompt('Sonni kiriting')
    var daraja = prompt('Darajani kiriting')

} while ((isNaN(son) || son == 0) || (isNaN(daraja) || daraja == 0))

for (let i = 1; i <= daraja; i++) {
    n *= son
}
alert('Javob: ' + n)