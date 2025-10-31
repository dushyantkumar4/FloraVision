import React from 'react'
import title_border from "../assets/svg/title_border.svg";

interface TitleProp{
    title:string;
}

const Title:React.FC<TitleProp> = ({title}) => {
  return (
    <div className='relative  flex'>
        <img src={title_border} alt="" className='rotate-180 size-11 absolute -left-3 top-1'/>
        <h2 className='text-[#FFFFFF] text-[2rem] 2xl:text-[3.43rem] font-medium'>{title}</h2>
        <img src={title_border} alt="" className='size-11 absolute -right-3 top-1'/>
    </div>
  )
}

export default Title