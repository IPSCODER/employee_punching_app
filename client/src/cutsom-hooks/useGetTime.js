import React from 'react'

const useGetTime = (props) => {
    var now = new Date(props);
    var TwentyFourHour = now.getUTCHours();
    var hour = now.getUTCHours();
    var min = now.getUTCMinutes();
    var sec = now.getUTCSeconds();
    var mid = 'pm';
    if(sec < 10) { 
      sec = "0" + sec; 
    }
    if (min < 10) {
      min = "0" + min;
    }   
    if (hour < 10 ) {
      hour = "0" + hour;
    }   
    if(TwentyFourHour < 12) {
       mid = 'am';
    }
    return {hour,min,sec,mid}
}

export default useGetTime