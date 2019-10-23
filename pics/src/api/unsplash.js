import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        'Authorization': `Client-ID 2ada397c1cbf4bde771f483620fba35a9a6e0dd70b702fbf31a5bfe1574429f5`
    }
})


