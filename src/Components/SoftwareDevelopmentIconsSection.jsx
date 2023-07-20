import React from 'react'

const SoftwareDevelopmentIconsSection = () => {

    const detailsWithIcon = [
        {
            title: "Mobile Development",
            icon: "software-development/app-development.png"
        },
        {
            title: "Dedicated Development teams",
            icon: "software-development/development-teams.png"
        },
        {
            title: "product engineering",
            icon: "software-development/product-engineering.png"
        },
        {
            title: "ui/ux Design",
            icon: "software-development/uiux-design.png"
        },
        {
            title: "it consulting",
            icon: "software-development/it-consulting.png"
        },
        {
            title: "qa & testing",
            icon: "software-development/qa-testing.png"
        },
        
    ]

  return (
    <div className='container SoftwareDevelopmentIconsSectionContainer'>
        <div className="row">
            {
                detailsWithIcon.map((item,index)=>{
                    return(
                        <div className="col-md-4 text-center py-4" key={index}>
                <img src={`assets/images/${item.icon}`} alt=""  className="SoftwareDevelopmentIconsSectionIcon"/>
                <h3 className="SoftwareDevelopmentIconsSectionTitle">{item.title}</h3>
            </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default SoftwareDevelopmentIconsSection