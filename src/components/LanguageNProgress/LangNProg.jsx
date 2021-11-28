import { useState } from 'react'

import LanguageCode from "../LanguageCode/LanguageCode";
import Progress from "../Progress";

const LangNProgress = (props) => {

  const [active, setActive] = useState(false);

  return (
    <div style={{height: 1000}}>
    <Progress/>
    <LanguageCode login={props.login}/>
    </div>
  )
}

export default LangNProgress;