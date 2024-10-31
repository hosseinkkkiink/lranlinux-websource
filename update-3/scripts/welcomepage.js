let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')

let database = {
    username:'amir',
    password:"1059"
}
function dataValidation() {
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value

    if (userNameValue.length < 3 && passwordValue.length < 10) {
        // alert('Error')
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = 'لطفا اطلاعات را به درستی وارد نمایید'
        modal.style.display = 'inline'
    } else {

            
                modal.style.background = 'green'
                modal.innerHTML = 'ورود موفقیت آمیز'
                modal.style.display = 'inline'
                // let’s assume that a user is browsing https://www.roocket.ir

 

// a user is redirected to a different page with the location.href method

location.href = '\cintroduction.html';

 

 

// a user is redirected to a different page with the location.replace method

location.replace('\cintroduction.html');
        localStorage.setItem("key" , userNameValue)

                // console.log("https//lranlinux/adminyouxlfnelasndfinfnewclass.html")
          
 
    }


    setTimeout(function () {
        modal.style.display = 'none'
    },3000 )
}



