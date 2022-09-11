import React from 'react'
import "../ImageContent.css";

const ImageContent = ({fetchData}) => {
  return (
    <div>
        <div className='images-wrapper'>
            {fetchData.map((data) => (
            <a href={data.pageURL} target='_blank' key={data.id}>
                <div className='image-area'>
                    <img src={data.largeImageURL} alt=''></img>
                </div>
            </a>
            ))}
        </div>
    </div>
  )
}

export default ImageContent