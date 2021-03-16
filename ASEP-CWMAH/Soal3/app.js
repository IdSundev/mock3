let pecahan = [25,10,5,1]
function cekkoin(koin){
  let result = ''
  // pecahan = [25,10,5,1]
  let jumlahPecahan = [0,0,0,0]
  let jumlahKoin = 0
  for(let i = 0; i < pecahan.length; i++){
    if(Math.floor(koin / pecahan[i]) < 1){
      continue;
    }else{
      jumlahPecahan[i] = Math.floor(koin/pecahan[i])
      koin = koin - (pecahan[i]*jumlahPecahan[i])
      jumlahKoin += jumlahPecahan[i]
    }
  }
  result += `Jumlah koin ${jumlahKoin}, `
  pecahan.forEach((val, index) => {
    if(jumlahPecahan[index] != 0){
      result += `${jumlahPecahan[index]} koin ${pecahan[index]} sen, `
    }
  })
  return result
}

console.log(cekkoin(49))
console.log(cekkoin(31))
console.log(cekkoin(50))