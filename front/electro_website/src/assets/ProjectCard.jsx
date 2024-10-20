import React from 'react'

function ProjectCard({ title, description, img }) {
    return (
        <div className='flex gap-4 mb-10'>
            <div className="flex flex-col bg-[#393939] rounded-xl p-4">
                <h1 className="text-white font-bold text-3xl mb-8">{title}</h1>
                <div className='flex gap-8'>
                    <img className='rounded-2xl'
                        src={img}
                        width={200}
                        height={200}
                    />
                    <p className='project-description'>
                        {description}
                    </p>

                </div>
            </div>

        </div>
    )
}

export default ProjectCard