import { useState } from "react";
import Dropdown from "../Dropdown";
import ConvertText from "./ConvertText";

const languages = [
    {
      label: 'Afrikaans',
      value: 'af'
    },
    {
      label: 'Arabic',
      value: 'ar'
    },
    {
      label: 'Hindi',
      value: 'hi'
    },
    {
      label: 'Bangla',
      value: 'bn'
    },
];

const Translate = () => {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState(languages[3]);
    return (
       <div>
            <textarea className="form-control mb-4" placeholder="Write here..." value={ text } onChange={ e => setText(e.target.value ) }></textarea>
            <div className="row">
                <div className="col">
                    <Dropdown options={ languages } label= { 'Select a languages' } selected= { language } onSelectedChange={ setLanguage }/>
                </div>
                <div className="col">
                    <strong>Converted Text</strong>
                    <ConvertText text={ text } language={ language.value }/>
                </div>
            </div>
       </div>
    );
}
export default Translate;