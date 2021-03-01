import React from "react"
import "./Login_Form_Component.css"
import {I18nProvider} from "../../i18n"
import intlLoader from '../../utils/intlLoader'
import {Link} from "react-router-dom"

function Login_Form_Component (props){
    const LoginFormComponentInputsCreation=props.LoginComponentInputsDataArray.map((item,pos)=>{
        return(
            <div className={`LFC-RFC-F-${item.InputHeading}-Input-Containers`}>
              <p className="LFC-RFC-F-ICs-InputsHeadings">{item.InputHeading}</p>
              <input className="LFC-RFC-F-ICs-Inputs" 
                type={item.InputType} 
                name={item.InputName} 
                placeholder={item.InputPlaceholder}
              />
            </div>
        )
    })
        return(
            <I18nProvider locale={props.locale}>
                <div className="Login-Form-Component">
                   <div className="LFC-Left-Content-Section">
                   </div>
                   <div className="LFC-Right-Form-Container">
                       <div className="LFC-RFC-Buttons-Container">
                           <Link to={`/${props.LanguageCode}`}>
                                <button className="LFC-RLF-BC-LoginBtn">
                                    Login
                                </button>
                           </Link>
                           <Link to={`/${props.LanguageCode}/register`}>
                                <button className="LFC-RLF-BC-RegisterBtn">
                                    Register
                                </button>
                           </Link>
                       </div>
                       <form className="LFC-RFC-Form">
                          <p className="LFC-RFC-F-Heading">{props.LoginFormComponentHeading}</p>
                          {LoginFormComponentInputsCreation}
                          <div className="LFC-RFC-F-Submit-Input-container">
                            <input 
                                className="LFC-RFC-F-Submit-Input" 
                                type="submit" 
                                value={props.SignInComponentSubmitBtnValue}
                            />
                          </div>
                          <div className={props.SignInComponentLastSectionClassName}>
                            <Link to={`/${props.LanguageCode}/forgot_password`}>
                                <a>Forgot password?</a>
                            </Link>
                            <Link to={`/${props.LanguageCode}/register`}>
                                <a>Not a member yet?</a>
                            </Link>
                          </div>
                       </form>
                   </div>
                </div>
            </I18nProvider>
        )
    }

export default Login_Form_Component