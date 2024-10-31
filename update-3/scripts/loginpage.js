let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')

let database = {
    username:userNameInput,
    password:passwordInput
}
function dataValidation() {
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value

    if ((userNameInput.value === "amiradmin" && passwordInput.value ==="1234")||(userNameInput.l) ) {

        modal.style.background = 'green'
        modal.innerHTML = 'ورود موفقیت آمیز'
        modal.style.display = 'inline'
        // let’s assume that a user is browsing https://www.roocket.ir



// a user is redirected to a different page with the location.href method

location.href = './adminyouxlfnelasndfinfnewclass';





// a user is redirected to a different page with the location.replace method

location.replace('adminyouxlfnelasndfinfnewclass.html');

        // console.log("https//lranlinux/adminyouxlfnelasndfinfnewclass.html")
    } else {

            
        // alert('Error')
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = 'لطفا اطلاعات را به درستی وارد نمایید'
        modal.style.display = 'inline'
    }


    setTimeout(function () {
        modal.style.display = 'none'
    },3000 )
}