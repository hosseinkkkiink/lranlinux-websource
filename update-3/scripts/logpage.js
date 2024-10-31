let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')

let database = {
    username:'amir',
    password:"1234"
}
function dataValidation() {
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value

    if (userNameValue.length < 8 || passwordValue.length < 8) {
        // alert('Error')
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = 'لطفا اطلاعات را به درستی وارد نمایید'
        modal.style.display = 'inline'
    } else {

        var database = [
            {id:1 , username:"admin",password:Math.floor(Math.random() * 100+6590+31)},
            // {id:2 , username:"alireza",password:"Ali1234"},
          ]
          
          var inputuser = prompt("نام و نام خانوادگی حداقل باید 6 کاراکتر داشته باشد");
          database.forEach(function(datal){
            if(datal.username==inputuser){
              console.log(datal.password)
              var inputpass = prompt("پسورد را وارد کنید")
              console.log(datal.password)
              if(datal.password==inputpass){
                modal.style.background = 'green'
                modal.innerHTML = 'لاگین با موفقیت انجام شد'
                modal.style.display = 'inline'
                location.href = 'https//lranlinux/adminyouxlfnelasndfinfnewclass.html';

 

 

                 // a user is redirected to a different page with the location.replace method

                location.replace('https//lranlinux/adminyouxlfnelasndfinfnewclass.html');
                console.log("https//lranlinux/adminyouxlfnelasndfinfnewclass.html")
                  
            }
          }else{
            alert("you don't have permision")

          }
          // return false;
          })
    }

    setTimeout(function () {
        modal.style.display = 'none'
    }, 3000)
}