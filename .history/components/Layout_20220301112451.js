import React from 'react';
import {
  Cloudinary,
  Top,
  TopCenter,
  TopImg,
  TopLeft,
  TopText,
  TopRight,
} from '../styles/tags/topbar';

export default function Layout({ children }) {

  return (
    <div style={{"display": "block"}}>
      <Top>
        <TopLeft>
          <TopImg src="https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png" />
          Next js
          <TopImg src="https://cdn-images-1.medium.com/max/1200/1*gGzRmUKNOC_X7klFjTk8EA.png" /> Emotion css
          <Cloudinary src="https://res.cloudinary.com/cloudinary-marketing/images/dpr_2.0/c_scale,w_300,dpr_3.0/f_auto,q_auto/v1638460217/website_2021/cloudinary_logo_blue_0720/cloudinary_logo_blue_0720.png?_i=AA"/>
        </TopLeft>
        <TopCenter>
            <TopText>
            BUSINESS CARD GENERATOR
            </TopText>
        </TopCenter>
        <TopRight></TopRight>
      </Top>
      {children}
    </div>
  );
}
