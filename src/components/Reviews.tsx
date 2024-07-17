/* eslint-disable @next/next/no-img-element */
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Reviews = () => {
    return <MaxWidthWrapper className='relative max-w-5xl '>
        <div>
            <img src="/what-people-are-buying.png" aria-hidden="true" alt="" />
        </div>
    </MaxWidthWrapper>
}

export default Reviews