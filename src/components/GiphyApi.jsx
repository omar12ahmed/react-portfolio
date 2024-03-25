import React, { useState, useEffect } from "react";
import axios from "axios";
import { easeInOut, motion } from "framer-motion"
import { Fade } from "react-awesome-reveal";



const GIPHY_API_KEY = "MqVayP47oxKVMqt1oxqye3kA2QbPgjnU";


function GiphyApi({ giphyId }) {
  const [gifUrl, setGifMetUrl] = useState('');

  useEffect(() => {
    const fetchGiphy = async () => {
      try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/${giphyId}`, {
          params: {
            api_key: GIPHY_API_KEY,
          }
        });

        const gifData = response.data.data;

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



  return gifUrl ? (
    <Fade cascade={false} delay={giphyId * 1000} direction="down" triggerOnce>

      <motion.div whileHover={{ scale: 1.1, opacity: 0.8 }} style={{ width: "300px", height: "200px", overflow: "" }} >
        <motion.img className="gifs"
          src={gifUrl}
          style={{
            width: "100%",
            height: "100%",
            marginBottom: "100px",
            objectFit: "cover",
          }} />
      </motion.div>
    </Fade>
  ) : null;
}

export default GiphyApi;