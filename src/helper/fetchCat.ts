import axios from 'axios';

export const fetchCat = async () => {
    const url: string = 'https://api.thecatapi.com/v1/images/search';

    try {
        const res = await axios.get(url);
        return res.data[0].url
    } catch(e) {
        console.log(e)
    }

}