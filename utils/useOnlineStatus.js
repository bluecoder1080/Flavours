import { useState, useEffect } from "react";

const OnlineStatus = () => {
  const [onlinestatus, setonlinestatus] = useState(true);


  useEffect(() => {
    window.addEventListener("offline", () => {
         setonlinestatus(false);
      });
      window.addEventListener("online", () => {
        setonlinestatus(true);
      });
    
  }, [])
  

  return onlinestatus;
};

export default OnlineStatus;
