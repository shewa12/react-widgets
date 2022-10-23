import axios from "axios";
import { useEffect, useState } from "react";
// API Key will only work for localhost:3000
const apiKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
/**
 * Convert text to a selected languages
 */
const ConvertText = ({text, language}) => {
    const [debouncedText, setDebouncedText] = useState(text);
    const [translatedText, setTranslatedText] = useState('');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        const translate = async () => {
            const url = "https://translation.googleapis.com/language/translate/v2";
            const { data } = await axios.post( url, {}, {
                params: {
                    q: debouncedText,
                    target: language,
                    key: apiKey
                }
            });
            setTranslatedText(data.data.translations[0].translatedText);
        }
        if (debouncedText){
            translate();
        }
    }, [debouncedText, language]);

    return (
        <p>
            { translatedText }
        </p>
    );
}
export default ConvertText;