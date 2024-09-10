import React from 'react'

export default function Video() {
    return (
        <div>
            <video autoPlay controls loop muted className="absolute inset-0 object-cover h-screen xl:h-auto">
                <source
                    src="/public/lp.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}
