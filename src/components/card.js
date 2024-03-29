import React from 'react'

export default function card() {
    return (
        <div>
            <div><div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src="https://media.istockphoto.com/photo/chilli-paneer-tikka-or-paneer-kabab-picture-id6294230?k=28&m=629423010&5=612x612&w=0&h=X-OBIncHWjNFqxGfQuQHwrYHi2GcUw-jn7kqqZpHSw8=" className="card-img-top" alt="..." />
                <div className="card-copy">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is some IMPORTANT text.</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 w-100bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1}> value={i + 1} </option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100 w-100bg-success rounded'>
                            <option value='half'>Half</option>
                            <option value='full'>Full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>
                </div>
            </div></div>

        </div>
    )
}
