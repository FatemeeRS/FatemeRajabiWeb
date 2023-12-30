import { useEffect, useState } from "react";
import Input from "../Input/Input";

const Emoji = () => {
  const [loadData, setLoadData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showEmoji, setShowEmoji] = useState("");
  const getEmojiList = async () => {
    setLoading(true);
    const responseEmoji = await fetch(
      "https://run.mocky.io/v3/5a7d4647-8509-4be4-8579-b4bfc7654b68"
    );
    const loadData = await responseEmoji.json();
    setLoadData(loadData);
    setLoading(false);
  };
  const handleSearchEmoji = (event) => {
    if (event.target.value) {
        const searchData = loadData
    //   console.log("sss", loadData);
      searchData.map((item) => {
        if(item.title === event.target.value){
             
            setShowEmoji(item.symbol)
        }
        return(
            showEmoji
        )
        
      })
    }
    console.log(showEmoji)
  };

  useEffect(() => {
    getEmojiList();
  }, []);

  return (
    <>


      <Input
        type="text"
        placeholder="Search Emoji"
        onChange={handleSearchEmoji}
      />
      {loading && "Loading"}

      

      <div style={{fontSize:"40px"}}>{showEmoji}</div>
    </>
  );
};

export default Emoji;
