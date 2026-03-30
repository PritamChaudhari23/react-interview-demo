//REACT DOCS - ADDING INTERACTIVITY SECTION

import React, { useEffect, useState } from 'react'

const Carousel = () => {

    const [data, setData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json()).then(photos => {
                photos.splice(10, 4990)
                setData(photos)
            })
            .catch(error => console.log('Error fetching photos: ', error))
    }, [])

    const handleNextClick = () => {
        let isLast = currentIndex == data.length - 1
        if(isLast) {
            alert('This is last photo')
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handlePreviousClick = () => {
        let isFirst = currentIndex == 0;
        if(isFirst) {
            alert('This is first photo')
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <div>
            {data.length > 0 && 
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <label>{data[currentIndex].title}</label>
                    <img src={data[currentIndex].url} height={400} width={400} />
                </div>
            }
            <button onClick={handlePreviousClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    )
}

export default Carousel