let dataUser = [
  {
    nama: 'Cef Syarif',
    username: 'cefsyarif',
    password: 'rahasia',
    role: 'admin'
  },
  {
    nama: 'Nina Kurniasih',
    username: 'ninakurniasih',
    password: 'rahasia',
    role: 'user'
  }
]

let mading = [
  {
    kegiatan: 'lari',
    hari: 'Senin',
    poster: 'https://cdn.idntimes.com/content-images/post/20200110/runner-running-shoes-on-track-sneakers-6007910264938ac120e014eb4c2d622c_600x400.jpg'
  },
  {
    kegiatan: 'estafet',
    hari: 'Selasa',
    poster: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1611501935/iawb85t9nd0xpg3x4ayp.jpg'
  }
]
let formLogin = document.getElementById('login')
formLogin.addEventListener('submit', login, false)

function updateKegiatan(e){
  let kegiatan = e.target.parentElement.parentElement
  let idKegiatan = parseInt(kegiatan.childNodes[1].textContent) - 1
  mading[idKegiatan] = {
    kegiatan: document.getElementById('editKegiatan').value,
    hari : document.getElementById('editHari').value,
    poster: document.getElementById('editPoster').value
  }
  getListKegiatan(mading, 'admin')
}

function editKegiatan(e){
  let kegiatan = e.target.parentElement.parentElement
  let idKegiatan = kegiatan.childNodes[1].textContent
  let editKegiatan = kegiatan.childNodes[3].textContent
  let editHari = kegiatan.childNodes[5].textContent
  kegiatan.childNodes[3].innerHTML = `<input type="text" id="editKegiatan" value=${editKegiatan}>`
  kegiatan.childNodes[5].innerHTML = `<input type="text" id="editHari" value=${editHari}>`
  kegiatan.childNodes[7].innerHTML = `<input type="text" id="editPoster" value=${mading[idKegiatan - 1].poster}>`
  kegiatan.childNodes[9].innerHTML = `<input type="button" value="Cancel" onclick="cancel()"> <input type="button" value="Yes" onclick="updateKegiatan(event)">`
}

function deleteKegiatan(e){
  let indKegiatan = parseInt(e.target.parentElement.parentElement.childNodes[1].textContent) - 1
  mading.splice(indKegiatan, 1)
  getListKegiatan(mading, 'admin')
}

function cancel(){
  getListKegiatan(mading, 'admin')
}

function confirmDelete(e){
  let kegiatan = e.target.parentElement.parentElement
  kegiatan.childNodes[9].innerHTML = `<input type="button" value="Yes" onclick="deleteKegiatan(event)"> <input type="button" value="No" onclick="cancel()">`
}

function addKegiatan(e){
  e.preventDefault()
  let kegiatan = document.getElementById('kegiatan').value
  let hari = document.getElementById('hari').value
  let poster = document.getElementById('poster').value
  mading.push({
    kegiatan,
    hari,
    poster
  })
  getListKegiatan(mading, 'admin')
  console.log("submited")
}

function logout(){
  document.getElementById('info').innerHTML = ''
  document.getElementById('listKegiatan').innerHTML = ''
  document.getElementById('username').value = ''
  document.getElementById('password').value = ''
}

function login(e){
  e.preventDefault()
  let username = document.getElementById('username').value 
  let password = document.getElementById('password').value 
  let user = dataUser.filter((val) => val.username == username && val.password == password)
  if(user.length > 0){
    user = user[0]
    getListKegiatan(mading, user.role)
    document.getElementById('info').innerHTML = `
      <h3>${user.role == 'admin' ? 'admin' : user.nama}</h3>
      <input type="button" value="Logout" onclick="logout()">`
  }else{
    document.getElementById('info').innerHTML = '<h3>Password salah</h3>'
  }
}

function getListKegiatan(mading, role){
  let kegiatan = '' 
  mading.forEach((val, index) => {
    kegiatan += `<tr>
    <td>${index + 1}</td>
    <td>${val.kegiatan}</td>
    <td>${val.hari}</td>
    <td><img src="${val.poster}" width="150px"></td>
    <td>${role == 'admin' ? '<input type="button" value="Delete" onclick="confirmDelete(event)"> <input type="button" value="Edit" onclick="editKegiatan(event)">' : ''}</td>
  </tr>`
  })
  if(role == 'admin'){
    kegiatan += `<tr>
      <form>
        <td></td>
        <td><input type="text" id="kegiatan" placeholder="Kegiatan"></td>
        <td><input type="text" id="hari" placeholder="Hari"></td>
        <td><input type="text" id="poster" placeholder="Poster"></td>
        <td><button type="submit" onclick="addKegiatan(event)">Add todo</button></td>
      </form>
    </tr>`
  }
  document.getElementById('listKegiatan').innerHTML = kegiatan
}