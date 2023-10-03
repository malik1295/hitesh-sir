// we want to see when a key is pressed from keyboard its key name keycode and code should appaer in the form of table so for this we made a div in html of id insert 
// for space u will see key name is not appeared so for this give name manually in e.key by using a strict check and then ternarry operator as us see
const insert=document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class="color"> 
    <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key ===" " ?"space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
    </div>
    `
})