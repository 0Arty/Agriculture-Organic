import React from 'react'
interface IIconProps {
  name: string
  width: number
  height: number
}

const Icon = ({ name, width, height }: IIconProps) => (
  <svg style={{ width, height }}>
    <use xlinkHref={`/sprite.svg#${name}`}></use>
  </svg>
)

export default Icon
