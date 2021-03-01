import React from "react"
import "./Login.css"
import {I18nProvider} from "../../i18n"
import intlLoader from '../../utils/intlLoader'
import Login_Form_Component from '../../components/Login_Form_Component/Login_Form_Component'

function Login_Page (props){
    const LoginPageInputsDataArray=[
        {
            InputHeading:"Email",
            InputType:"Email",
            InputName:"email",
            InputPlaceholder:"Enter your email"
        },
        {
            InputHeading:"Password",
            InputType:"password",
            InputName:"password",
            InputPlaceholder:"Enter your password"
        }
    ]
        return(
            <I18nProvider locale={props.locale}>
                <div className="Login-Page">
                   <Login_Form_Component
                     LanguageCode={props.LanguageCode}
                     LoginFormComponentHeading={"Log In"}
                     LoginComponentInputsDataArray={LoginPageInputsDataArray}
                     SignInComponentLastSectionClassName={"LFC-RFC-F-Last-Section-Visible"}
                     SignInComponentSubmitBtnValue={"Sign In"}
                   />
                </div>
            </I18nProvider>
        )
    }

export default Login_Page