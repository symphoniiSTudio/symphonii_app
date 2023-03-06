import React from 'react';
import Comicnav from '../Comic/Comicnav'
import ComicBanner from '../Comic/ComicBanner'
import  ComicShowhow from  '../Comic/ComicShow'
import Footer from '../Footer';


function ComicPage() {
  return <div>
      <Comicnav/>
      <ComicBanner/>
      <ComicShowhow/>
      <Footer/>
  </div>;
}

export default ComicPage;
