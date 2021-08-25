import React from 'react'
import blob from '../Assets/blob.webp'
import StyledBlog from '../Styles/Blob.styles'

const Blob = ({className}) => {
    return (
        <img className={className} src={blob} alt="blob" />
    )
}

export default Blob
