import React from 'react'

function AssetAllocation(props) {
    return (
        <div className='w-2/5 mx-10 my-10'>
            <div className='text-3xl text-black font-medium' style={{ fontFamily: 'Futura' }}>{props.title}</div>
            <div className='font-hind text-xl text-black mt-4'>{props.desc}</div>

        </div>
    )
}

export default AssetAllocation
