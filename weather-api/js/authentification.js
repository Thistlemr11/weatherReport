let userList=localStorage.getItem('userData_request')


const userLoginData={
    username:'',
    password:''
}
if(!userList){
    alert('Извините,но в нашей базе данных не существует пользователей,поэтому вы не можете залогиниться ')
    window.location.pathname='/C:/Users/Thistle/WebstormProjects/weather-api/registration.html'
}
else{
    userList=JSON.parse(userList)
}

document.getElementById('input_auth_username').addEventListener('input',(e)=>{
    userLoginData.username=e.target.value
})

document.getElementById('input_auth_password').addEventListener('input',(e)=>{
    userLoginData.password=e.target.value
})

document.getElementById('signin').addEventListener('click',()=>{
        if(userList.username === userLoginData.username && userList.password === userLoginData.password){
            window.location.href='/C:/Users/Thistle/WebstormProjects/weather-api/index.html'
        }
        else{
            alert('извините,но вы ввели неверные данные ')
        }
})