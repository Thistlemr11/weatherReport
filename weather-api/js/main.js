const token = '599d2abc71232f63fff187d6938fdfb4'
const defaultLocation = 'ru'
let searchCityList = localStorage.getItem('searchCityList');


document.getElementById('searchCity').addEventListener('input',(e)=>{
    setTimeout(()=>{

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${token}&lang=${defaultLocation}`)
            .then(res=>res.json()).then(city=>{
            if(!searchCityList){
                searchCityList=[]
            }
            if(city.name){
                searchCityList.push(city.name)
               const uniqueArray = searchCityList.filter(function(item, pos) {
                    return searchCityList.indexOf(item) === pos;
                })
                localStorage.setItem('searchCityList',JSON.stringify(uniqueArray))
            }
        })
            .catch(e=>console.log(e,'error'))
    },2000)
})

if(searchCityList){
    searchCityList=JSON.parse(searchCityList)
    searchCityList.forEach(city=>{
        const cityElement = document.createElement('div')
        cityElement.innerText = `${city}`
        document.querySelector('.searchCityDropdown').append(cityElement)
        cityElement.addEventListener('click',()=>{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&lang=${defaultLocation}`)
                .then(res=>res.json()).then(item=>{
                    console.log(item)
                })
            })
                .catch(e=>console.log(e,'error'))
        })
    }
else{
    const nothing = document.createElement('h1')
    nothing.innerText='У вас еще нет добавленных городов'
    document.querySelector('.searchCityDropdown').append(nothing)
}
