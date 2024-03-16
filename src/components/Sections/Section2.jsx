import React from 'react'
import '../../index.css'

function Section2() {
    return (
        <>
            <div className="container text-start py-5 my-5">
                <div className="row d-flex align-content-center align-items-center">
                    <div className="col">
                        <h2 className='title-2 my-4'>Light, Fast & Powerful</h2>
                        <p className='description-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                        <p className='description-2'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        <div className="grid row mt-5">
                            <div className="col">
                                <img className='icon' src='../../../img/icon.png' />
                                <h3 className='title-3'>Title Goes Here</h3>
                                <p className='description-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                            </div>
                            <div className="col">
                                <img className='icon' src='../../../img/icon.png' />
                                <h3 className='title-3'>Title Goes Here</h3>
                                <p className='description-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <img className='img-1' src='../../../img/img1.png' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Section2