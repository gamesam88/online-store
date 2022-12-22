import React from "react";
import './countOfProduct.scss'

interface ICount {
  decreaseCount: () => void
  increaseCount: () => void
  count: number
}

export function CountOfProduct ({decreaseCount, increaseCount, count}: ICount) {

  return (
    <div className="container__count">
      <span onClick={decreaseCount}>-</span>
      <span>{count}</span>
      <span onClick={increaseCount}>+</span>
    </div>
  )
}