import React from 'react'
import { useParams } from "react-router-dom"

export default function HostVansDetail() {

    const [currentVan , setCurrentVan] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans))
    } , [])

    if (!currentVan) {
        return <h1>loading...</h1>
    }

  return (
    <div>
      <img src={currentVan.imageUrl}  width={150} />
      <h2>{currentVan.type}</h2>
      <p>{currentVan.price}</p>
    </div>
  )
}
