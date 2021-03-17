let barangLelang = [
  {
    nama: 'Baju',
    harga: 10000
  },
  {
    nama: 'Celana',
    harga: 20000
  },
  {
    nama: 'Kacamata',
    harga: 30000
  }
]

let lelangArr = (num) => {
  let result = `Di menit ke ${num} Product Info\n`
  for(let i = 0; i < num; i++){
    barangLelang[0].harga = barangLelang[0].harga + Math.ceil((barangLelang[0].harga * 0.1))  
    barangLelang[1].harga = barangLelang[1].harga + Math.ceil((barangLelang[1].harga * 0.2))  
    barangLelang[2].harga = barangLelang[2].harga + Math.ceil((barangLelang[2].harga * 0.3))  
  }
  barangLelang.forEach((val) => result += `Nama Barang = ${val.nama} , harga = Rp. ${val.harga}\n`)
  return result
}
console.log(lelangArr(1))
console.log(lelangArr(5))
console.log(lelangArr(10))

