import React from 'react'

const CardBangalore = ({title,desc}) => {
  return (
    <div className="card-bangalore">
  <div className="content-bangalore">
    <h3 className="heading">{title}
    </h3><p className="para">
      {desc}
    </p>
  </div>
</div>

  )
}

export default CardBangalore