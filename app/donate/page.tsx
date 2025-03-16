import React from 'react'

const Donate = () => {
    return (
        <div className=' flex justify-center'>

            <div className='bg-white w-6/12 shadow-lg rounded-lg p-5'>
                <h1 className='text-center mb-3'>How to Donate</h1>
                <p className='text-center'>We have a go fund me set up for donations. In the future as we grow, we plan to have events and fundraisers so that the public can come out and support the feline community. If we can just change the fate of even one cat, for one family, our mission will be a success. We strive to help as many cats as we can within this journey. If you can, we invite you along for a fulfilling ride.</p><br />
                <p className='text-center'>
                    You can donate by going to our gofundme page here
                    <br />
                    <button className='px-3'>
                        <a className='font-bold text-White-800' href="https://gofund.me/4f9f0e4d">Donate</a>
                    </button>

                </p>
            </div>

        </div>
    )
}

export default Donate
