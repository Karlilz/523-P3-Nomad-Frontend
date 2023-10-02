import React from 'react'

const Post = () => {
  return (
    <div className = "post">
    <div className = "image">
    <img src = "https://www.travelandleisure.com/thmb/QRYh2q-PGmy9Ty0GqSXAFM_0u-0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-paris-eiffle-tower-airplane-window-DLTAPARIS0523-836d48ce2f9745f1b00605a46d73a525.jpg" alt = ""/>
    </div>
    <div className = "texts">
    <h2>This New Delta Flight Makes It So Much Easier</h2>
    <p className = "info">
      <a className = "author"> Miguel C</a>
      <time>9-30-2023</time>
    </p>
    <p className = "summary">Delta Air Lines just relaunched a daily direct flight from Los Angeles to Paris</p>
    </div>
  </div>
  )
 }

export default Post