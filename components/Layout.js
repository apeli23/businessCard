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
    <div>
      <Top>
        <TopLeft>
          <TopImg src="https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png" />
          Next js
          
          
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
