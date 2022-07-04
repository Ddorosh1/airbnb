import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 cursor-pointer'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">ABOUT</h5>
            <p>Newsroom</p>
            <p>Learn about new features</p>
            <p>Letter from our Founders</p>
            <p>Careers</p>
            <p>Investors</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">COMMUNITY</h5>
            <p>Airbnb.org: disaster relief housing</p>
            <p>Support Afghan refugees</p>
            <p>Combating discrimination</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">HOSTING</h5>
            <p>Try hosting</p>
            <p>Visit our community</p>
            <p>Aircover for Hosts</p>
            <p>Explore hosting resources</p>
            <p>How to host responsibly</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Saftey</p>
            <p>Aircover</p>
            <p>Saftey Information</p>
            <p>Report a neighborhood concern</p>
        </div>
    </div>
  )
}
  

export default Footer
