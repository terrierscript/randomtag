import React, { Component } from 'react'
import { round } from 'mathjs'

function r(num){
  try{
    return round(num, 2)
  }catch(e){
    return NaN
  }
}

const Tag = ({tagLabel, onClick}) => {
  // なぜか最後に空白が無いとcssが崩れる。謎。
  let {label, num, exp} = tagLabel
  return <span className='tag-item' onClick={onClick}>
    <span className='tag-label'>{`#${label}`}</span>
    <span className='tag-num'>{num}</span>
    <span className='tag-exp'>{`${r(exp) * 100 }%`}</span>
  </span>
}

export default class Tags extends Component {
  render () {
    let { onTagClick, hashTags } = this.props
    return <div>{
      hashTags.map((t,i) => {
        if(t.selected){
          return <Tag key={i} tagLabel={t} onClick={ () => onTagClick(t.label) } />
        }
        return null
      })
    }</div>
  }
}