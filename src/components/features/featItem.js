import React from 'react'

export default function FeatItem({icon, iconAlt, title, description}) {
  return (
        <div className="feature-item">
        <img
          src={icon}
          alt={iconAlt}
          className="feature-icon"
        />
        <h3 className="feature-item-title">{title}</h3>
        <p>{description}</p>
      </div>
  )
}