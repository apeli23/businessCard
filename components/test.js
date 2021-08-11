import React, {useState, createRef} from 'react';
import { useScreenshot } from 'use-react-screenshot'

function Test(){
    const[logo, setLogo]=useState('')
    const handleFileInputChange = async (e) => {
        const files = e.target.files;
        if (!files.length) return;
        console.log(files)
        
        // Store promises in array
        for (let file of files) {
            await readFile(file).then((encoded_file) => {
            setLogo(encoded_file);
            });
        }
    }
    function readFile(file) {
        return new Promise(function (resolve, reject) {
          let fr = new FileReader();
    
          fr.onload = function () {
            resolve(fr.result);
          };
    
          fr.onerror = function () {
            reject(fr);
          };
    
          fr.readAsDataURL(file);
        });
    }
    return(
        <div>
            <img width="200px" 
            src={logo}
            />
            <input type="file" accept="image/x-png,image/gif,image/jpeg"  onChange={handleFileInputChange}/>  
        </div>
        
    )
}export default Test