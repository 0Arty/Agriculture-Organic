import React from 'react'
interface IIconProps {
  name: string
  width: number
  height: number
  styling?: string
}

const Icon = ({ name, width, height, styling }: IIconProps) => (
  <svg style={{ width, height }} className={styling}>
    <use xlinkHref={`/sprite.svg#${name}`}></use>
  </svg>
)

export default Icon
