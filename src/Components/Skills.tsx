import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className="container pt-32">
        <div className="grid md:grid-cols-2 gap-20 item-center">
            <div data-aos="zoom-in">
<h2 className="text-4xl md:text-5xl">Technologies i work with</h2>
<p className="text-gray-500 pt-2">
    I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js

</p>
            </div>
            <div>
                <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
                    <div className="space-y-2">
                        
                        <h2 data-aos="zoom-in">Typescript</h2>
                        <h2 data-aos="zoom-in">React.js</h2>
                        <h2 data-aos="zoom-in">Next.js</h2>

                    </div>
                    <div>
                    <h2 data-aos="zoom-in">Tailwind Css</h2>
                        <h2 data-aos="zoom-in">Html</h2>
                        <h2 data-aos="zoom-in">Node.js</h2>
                        </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Skills
