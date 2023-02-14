import React from 'react'
import product1 from '../../images/image-product-1.jpg'
import product2 from '../../images/image-product-2.jpg'
import product3 from '../../images/image-product-3.jpg'
import product4 from '../../images/image-product-4.jpg'
import thumb1 from '../../images/image-product-1-thumbnail.jpg'
import thumb2 from '../../images/image-product-2-thumbnail.jpg'
import thumb3 from '../../images/image-product-3-thumbnail.jpg'
import thumb4 from '../../images/image-product-4-thumbnail.jpg'
import arrow from '../../images/icon-next.svg'
import {Thumbnails,DesktopPreview,MobilePreview,Carousel,NextBtn,PrewBtn} from './Galery.style'



function Gallery({className}) {
    const pictures = [product1, product2, product3, product4]  

    const [url, setUrl] = React.useState(product1)
    const [index, setIndex] = React.useState(0)

 

  return (
    <div className={className}>


      <Carousel>
    
       <MobilePreview src={pictures[index]}/>
        <NextBtn
          onClick={() => {
            if (index === pictures.length - 1) return
            setIndex(index + 1)
          }}
        ><div><img src={arrow} alt=""/></div></NextBtn>
        <PrewBtn
          onClick={() => {
            if (index === 0) return
            setIndex(index - 1)
          }}
        ><div><img src={arrow} alt=""/></div></PrewBtn>
      </Carousel>
    

      <DesktopPreview src={url} alt="product preview" />
      <Thumbnails>
        <img
          id='galery-img1'
          onClick={() => {
            setUrl(product1)
          }}
          src={thumb1}
          alt="product 1 thumbnail"
        />

        <img
          id='galery-img2'
          onClick={() => {
            setUrl(product2)
          }}
          src={thumb2}
          alt="product 2 thumbnail"
        />

        <img
          id='galery-img3'
          onClick={() => setUrl(product3)}
          src={thumb3}
          alt="product 3 thumbnail"
        />

        <img
          id='galery-img4'
          onClick={() => setUrl(product4)}
          src={thumb4}
          alt="product 4 thumbnail"
        />

      </Thumbnails>
    </div>
  )
}

export default Gallery
