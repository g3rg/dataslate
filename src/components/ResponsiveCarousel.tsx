import React from 'react'
import { Carousel } from 'react-bootstrap'

type Props = {
  children: React.ReactNode
}

export function ResponsiveCarousel (props : Props) {
  return (
    <>
      <Carousel className="d-block d-lg-none" interval={null} touch={true} controls={true} indicators={false}>
        { props.children }
      </Carousel>
      <div className="d-none d-lg-block">
        { props.children }
      </div>
    </>
  )
}

