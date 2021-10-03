import React from 'react'
import { Carousel } from 'react-bootstrap'

type Props = {
  children: React.ReactNode
}

export function ResponsiveCarouselItem (props : Props) {
  return (
    <>
      <Carousel.Item className="d-block d-lg-none">
        { props.children }
      </Carousel.Item>
      <div className="d-none d-lg-block">
        { props.children }
      </div>
    </>
  )
}

