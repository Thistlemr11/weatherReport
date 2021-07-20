const localeList = {
    EN:{
        auth:'Authentification',
        signUp:'Registration',
        cityNull:"I m sorry but you havent a favourite cities",
    },
    RU:{
        auth:'Авторизация',
        signUp:'Регистрация',
        cityNull:'У вас еще нет добавленных городов'
    }
}

var locale = (key)=>{
    let currentLocale=localStorage.getItem('locale')
    if(currentLocale){
        for(currentLocale in localeList ){
            return currentLocale[key]
        }
    }

}

