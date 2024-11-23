import React from 'react'
import Image from "next/image"


interface proopsType {
    title:string;
    description:string;
    img:string;
    tags:string[];
}

const Card:React.FC<proopsType> = ({title,tags,description,img}) => {

  return (
    <div className='border border-accent w-[300px] sm:w-[350px]' data-aos="zoom-in">
        <div>
        <Image
        className="w-[300px] sm:w-[350px] h-auto"
        src={img}
        width={300}
        height={350}
        alt={title}
      />
        </div>
      <div className='p-4 space-y-4'>
        <div className='text 4xl font-extralight'>{title}
        </div>
<div>
    {description}
</div>
<div>
    {tags?.map((project)=>(
        <div className="tags" key={project}>
    {project}
</div>))}
</div>
      </div>
    </div>
  )
}

export default Card;