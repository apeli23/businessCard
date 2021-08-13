import React, { createRef, useState } from 'react'
import { useScreenshot } from 'use-react-screenshot'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/card'
import Forms from '../components/form'
import Test from '../components/test'
import BuildCard from '../components/getcard'
 
export default function Home() {
  
  const ref = createRef(null)
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(ref.current)
  return (
    <div  >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 id='title'><span> BUSINESS CARD GENERATOR</span></h1>
      {/* <Test/> */}
      {/* <Card/> */}
      {/* <Forms/> */}
      <BuildCard/>  

    </div>
  )
}
