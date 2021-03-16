let madding = [
  {
    kegiatan: 'lari',
    hari: 'Senin',
    poster: 'https://cdn.idntimes.com/content-images/post/20200110/runner-running-shoes-on-track-sneakers-6007910264938ac120e014eb4c2d622c_600x400.jpg'
  },
  {
    kegiatan: 'estafet',
    hari: 'Selasa',
    poster: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1611501935/iawb85t9nd0xpg3x4ayp.jpg'
  },
]
let userData = [
  {
    nama: 'Cef Syarif',
    username: 'cefsyarif',
    password: '123456',
    role: 'admin'
  },
  {
    nama: 'Nina Kurniasih',
    username: 'ninakurniasih',
    password: '123456',
    role: 'user'
  },
  {
    nama: 'Ina Yulistiani',
    username: 'inayulistiani',
    password: '123456',
    role: 'user'
  },
]
var userLogin
var elForm = document.getElementById('elForm')
elForm.addEventListener('submit', cekLogin, false)

class User{
  constructor(nama, username, password, role){
    this.nama = nama
    this.username = username
    this.password = password
    this.role = role
  }

  getMadding(madding, role){
    let kegiatan = ''
    let i = 1
    madding.forEach((val, index) => {
      kegiatan +=`<tr>
      <td>${i}</td>
      <td>${val.kegiatan}</td>
      <td>${val.hari}</td>
      <td><img src="${val.poster}" width="100px"></td>`
      if(role == 'admin'){
        kegiatan += `<td>
          <input type="button" value="Edit" onclick="editMadding(${index})">
          <input type="button" value="Delete" onclick="editMadding(${index})">
        </td>`
      }else{
        kegiatan += "<td></td>"
      }
      i++
    })
    kegiatan +="</tr>"
      if(role == 'admin'){
        kegiatan += `<tr>
          <form id="formKegiatan">
            <td></td>
            <td><input type="text" id="namaKegiatan" placeholder="Nama Kegiatan"></td>
            <td><input type="text" id="hari" placeholder="Hari"></td>
            <td><input type="text" id="poster" placeholder="Poster"></td>
            <td><button type="submit">Add Todo</button></td>
          </form>
        </tr>`
      }
    document.getElementById('madding').innerHTML = kegiatan
  }

}

function cekLogin(e){
  e.preventDefault()
  let username = document.getElementById('username').value 
  let password = document.getElementById('password').value 
  let userLogin = userData.filter((val) => val.username == username && val.password == password)
  if(userLogin.length != 0){
    user = new User(userLogin[0].nama, userLogin[0].username, userLogin[0].password, userLogin[0].role)
    user.getMadding(madding, userLogin[0].role)
  }else{
    document.getElementById('message').innerHTML = "<h3>Password Salah</h3>"
  }
}
// get madding
