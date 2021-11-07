
import { useState, useEffect } from 'react'

const IsScaledDevice = () => {
    const isBrowser = typeof window !== 'undefined'
    const [width, setWidth] = useState(isBrowser ? window.screen.availWidth : 0);
    const [height, setheight] = useState(isBrowser ? window.screen.availHeight : 0);
    const [isScaled,setIsScaled] = useState((width<500||height<700)?true:false   );
    console.log(width,height);
    useEffect(() => {
      if (!isBrowser) return false
  
      const handleResize = () =>  {
          setWidth(window.screen.availWidth);
          setheight(window.screen.availHeight);
          setIsScaled((width<500||height<700) ? true : false);
          
      }
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })
  
    return isScaled
  }

  export default IsScaledDevice;