import axios from "axios";
const wikiInstance = axios.create({
    baseURL: 'https://en.wikipedia.org/w/api.php?origin=*',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
export default wikiInstance;