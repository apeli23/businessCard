import React, { useState, createRef } from 'react';
import { useScreenshot } from 'use-react-screenshot'
import Button from '@material-ui/core/Button';


function Test() {
  let cardlink =[]
  const profileref = createRef(null)
  const cardref = createRef(null)

  const [userprofile, takeScreenshot] = useScreenshot()
  const [usercard, getFinalCard] = useScreenshot()
  const[cardurl,setCardUrl]= useState()

  //get profile
  const getProfile = () => {
    takeScreenshot(profileref.current)
    if (!userprofile) return
    // uploadProfile(userprofile)
  }

  //final card
  const getCard = () => {
    getFinalCard(cardref.current)
    console.log("final card", usercard)
    uploadCard(usercard)
  }
  function uploadCard(img) {
    cardlink=[]
    console.log("upload this",img)
    try {
      fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: img }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log("response",response)
          response.json().then((data) => {
            cardlink.push("data.data",data.data);
            setCardUrl(cardlink)
          });
        });
    } catch (error) {
      console.error(error);
    }
  }
  function setcardUrl(link){
    setCardUrl(cardlink.toString())
    console.log("string url",cardurl)
  }
  return (
    <div>
      <div ref={profileref}>
        PICTURE ONE
        <Button color="primary" variant="contained" onClick={getProfile}>BUTT0N ONE</Button><br /><br />
      </div>

      <div ref={cardref}>
        PICTURE TWO
        <Button color="primary" variant="contained" onClick={getCard}>get url 2</Button><br /><br />
        <h3></h3>
      </div>
      <img src={userprofile}/>
      <img src={usercard}/>
    </div>

  )
} export default Test