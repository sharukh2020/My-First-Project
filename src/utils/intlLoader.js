import React from "react"
import {FormattedMessage} from "react-intl"

const intlLoader=(id,value={})=><FormattedMessage id={id} values={{...value}}/>

export default intlLoader