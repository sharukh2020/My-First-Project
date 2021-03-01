import './App.css';
import {useState,useEffect} from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import {LOCALES,I18nProvider} from "./i18n"
import Login_Page from "./pages/Login_Page/Login"
import Register_Page from "./pages/Register_Page/Register"
import User_Home_Page from "./pages/User_Home_page/User_Home_Page"
import Forgot_Password_Component from "./components/Forgot_Password_Component.js/Forgot_Password_Component"
import Email_Verification_Component from "./components/Email_Verification_Component/Email_Verification_Component"
import Reset_Password_Component from "./components/Reset_Password_Component/Reset_Password_Component"
import Password_Reset_Success_Component from "./components/PW_Reset_Success_Component/PW_Reset_Success_Component"

function App() {

  const [locale,setLocale]=useState(LOCALES.ENGLISH)  

  const OnSelectLanguageBtnClick=(param)=>{
    setLocale(LOCALES[param])
  }

  const UpdatingTheWebAppLanguage=(param)=>{
    if(param==="en"){
      setLocale(LOCALES["ENGLISH"])
    }
    else if(param==="de"){
      setLocale(LOCALES["GERMAN"])
    }
    else if(param==="fr"){
      setLocale(LOCALES["FRENCH"])
    }
    else{
      const GetPathName=window.location.pathname
      const GetString=GetPathName.substring(3,GetPathName.length)
      window.location.pathname=`/en${GetString}`
      setLocale(LOCALES["ENGLISH"])
    }
  }

  const GetLanguageFromQueryString=()=>{
    if(window.location.pathname==="/"){
    const BrowserLocalLanguage=navigator.language
    UpdatingTheWebAppLanguage(BrowserLocalLanguage.substr(0,2))
  }
  else{
    const GetPathName=window.location.pathname
    UpdatingTheWebAppLanguage(GetPathName.substr(1,2))
    }
  }

  useEffect(()=>{
      GetLanguageFromQueryString()
      window.onlanguagechange=()=>{
        const GetPathName=window.location.pathname
        const GetString=GetPathName.substr(3,GetPathName.length)
        const BrowserLocalLanguage=navigator.language
        window.location.pathname=`/${BrowserLocalLanguage.substr(0,2)}${GetString}`
       }
    }
  )
    const GetLocalefromState=locale
    const GetLangCode=GetLocalefromState.substr(0,2)

  return (
    <I18nProvider locale={locale}>
      <BrowserRouter>
        <div>
          <Switch>
          <Route path={`/${GetLangCode}/password_reset_success`}>
              <Password_Reset_Success_Component
                Locale={locale}
                LanguageCode={GetLangCode} 
              />
            </Route>
          <Route path={`/${GetLangCode}/password_reset`}>
              <Reset_Password_Component
                Locale={locale}
                LanguageCode={GetLangCode} 
              />
            </Route>
           <Route path={`/${GetLangCode}/email_verification`}>
              <Email_Verification_Component
                Locale={locale}
                LanguageCode={GetLangCode} 
              />
            </Route>
            <Route path={`/${GetLangCode}/forgot_password`}>
              <Forgot_Password_Component
                Locale={locale}
                LanguageCode={GetLangCode} 
              />
            </Route>
            <Route path={`/${GetLangCode}/user_home`}>
                <User_Home_Page/>
            </Route>
            <Route path={`/${GetLangCode}/register`}>
                <Register_Page
                  Locale={locale} 
                  OnSelectLanguageBtnClick={OnSelectLanguageBtnClick} 
                  LanguageCode={GetLangCode}
                />
            </Route>
            <Route path="/">
                <Login_Page 
                  Locale={locale} 
                  OnSelectLanguageBtnClick={OnSelectLanguageBtnClick} 
                  LanguageCode={GetLangCode}
                />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
