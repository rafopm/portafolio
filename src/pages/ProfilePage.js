import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProfilePage() {
    const { username } = useParams();
  return (
    <div>
        <h2>useParams | Ver URL</h2>
        <h2>ProfilePage: { username }</h2>
    </div>
  )
}
