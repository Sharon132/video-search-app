import { useEffect, useState } from "react";
import axios from "axios";
const KEY = 'AIzaSyCB6Scd7-0RNkf3c7GO_htrdetc2F1rlLA';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, []);

    const search = async (term) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: "snippet",
                maxResults: 5,
                key: KEY,
                q: term,
                type: 'video',
            }
        });
        setVideos(response.data.items);
    }
    return [videos, search]
}

export default useVideos;