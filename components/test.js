import React, {useState, createRef} from 'react';
import { useScreenshot } from 'use-react-screenshot'

function Test(){
    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot()
    // const getImage = () => takeScreenshot(ref.current)
    
    const getData = async () => {
        const response = await takeScreenshot(ref.current)
         
        
        console.log(image)
    }
    
    getData()
    return(
        <div>
            <div>
                <button style={{ marginBottom: '10px' }} onClick={getData}>
                Take screenshot
                </button>
            </div>
            <img width="200px" src={image} alt={'Screenshot'} />
            <div ref={ref}>
                <h1>use-react-screenshot</h1>
                <p>
                <strong>hook by @vre2h which allows to create screenshots</strong>
                </p>
            </div>
    </div>
    )
}export default Test