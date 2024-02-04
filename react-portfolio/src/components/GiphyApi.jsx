import React, { useState, useEffect } from "react";
import axios from "axios";
import {easeInOut, motion} from "framer-motion"


const GIPHY_API_KEY = "MqVayP47oxKVMqt1oxqye3kA2QbPgjnU";


function GiphyApi({giphyId}) {
  const [gifMetUrl, setGifMetUrl] = useState('');

  useEffect(() => {
    const fetchGiphy = async () => {
      try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/${giphyId}`, {
          params: {
            api_key: GIPHY_API_KEY,
          }
        });

        const gifData = response.data.data;
        console.log(gifData);

        // Use the 'original' size image URL
        const gifImageUrl = gifData.images.original.url;

        setGifMetUrl(gifImageUrl);
      } catch (error) {
        console.error(`Error fetching Giphy for ID ${giphyId}:`, error);
      }
    };

    if (giphyId) {
        fetchGiphy();
      }
    }, [giphyId]);

    

  return gifMetUrl ? (
    <motion.div whileHover={{ scale: 1.1, opacity:0.8 }}  >
        <motion.img src={gifMetUrl} alt="A 5 Day weather forcast project" />
    </motion.div>
  ) : null;
}

export default GiphyApi;