import React, { useState } from "react"
import "./Register.css"
import {I18nProvider} from "../../i18n"
import intlLoader from '../../utils/intlLoader'
import Login_Form_Component from '../../components/Login_Form_Component/Login_Form_Component'


function Register_Page (props){
    const RegisterPageInputsDataArray=[
        {
            InputHeading:"Firstname",
            InputType:"text",
            InputName:"firstname",
            InputPlaceholder:"Enter your firstname"
        },
        {
            InputHeading:"Lastname",
            InputType:"text",
            InputName:"lastname",
            InputPlaceholder:"Enter your lastname"
        },
        {
            InputHeading:"Email",
            InputType:"email",
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
                <div className="Register-Page">
                  <Login_Form_Component
                     LanguageCode={props.LanguageCode}
                     LoginFormComponentHeading={"Register"}
                     LoginComponentInputsDataArray={RegisterPageInputsDataArray}
                     SignInComponentLastSectionClassName={"LFC-RFC-F-Last-Section-Hidden"}
                     SignInComponentSubmitBtnValue={"Sign Up"}
                   />
                </div>
            </I18nProvider>
        )
    }

export default Register_Page