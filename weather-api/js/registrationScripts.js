const countryList=[
    {
        key:'BY',
        fullName:'Belarus'
    },
    {
        key:'UKR',
        fullName:'Ukraine'
    },
    {
        key:'RU',
        fullName:'Russia'
    }
]

const signUpData={
    username:'',
    password:'',
    country:''
}

countryList.forEach(country=>{
    const option=document.createElement("option");
    option.innerText=`${country.key}`;
    document.querySelector('.countrySelect').append(option)
})
document.querySelector('.countrySelect').addEventListener('change',(e)=>{
    signUpData.country=e.target.value
})

document.getElementById('input_username').addEventListener('input',(e)=>{
    signUpData.username=e.target.value
})

document.getElementById('input_password').addEventListener('input',(e)=>{
    signUpData.password=e.target.value
})

document.getElementById('signup').addEventListener('click',()=>{
    localStorage.setItem('userData_request',JSON.stringify(signUpData))
    window.location.pathname='/C:/Users/Thistle/WebstormProjects/weather-api/authentification.html'
})
