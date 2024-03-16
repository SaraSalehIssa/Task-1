import React from 'react'
import '../../index.css'

function Section1() {
    return (
        <>
            <div className="container text-start py-5 my-5">
                <div className="row">
                    <div className="col">
                        <h1 className='title my-2'>Introduce Your Product Quickly & Effectively</h1>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                        <p className='description'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        <div className="grid row">
                            <div className="col">
                                <button className="btn btn-2 rounded-1" type="submit">Purchase UI Kit</button>

                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-2 rounded-1 learn-more-btn">Learn More</button>

                            </div>
                        </div>

                    </div>
                    <div className="col">
                        
                    </div>
                </div>
            </div>


        </>
    )
}

export default Section1