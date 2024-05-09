import React from 'react'

function KeyRatios({ data, config }) {


    return (
        <div className='mt-12 mx-auto flex justify-between px-12' style={{ width: '70%', height: '200px', backgroundColor: '#1F79E0' }}>
            {config.map((item, id) => {
                return (<>
                    <div>
                        <div className='text-3xl font-normal font-hind'>{item.label}</div>
                        <div className='font-medium text-2xl'>
                            {data[item.key]}
                        </div>


                    </div>
                    <div style={{ backgroundColor: '#92B2D7', width: '1px', height: '60px' }}></div>

                </>)
            })}

        </div>
    )
}

export default KeyRatios
