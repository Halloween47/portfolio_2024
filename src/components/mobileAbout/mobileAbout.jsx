import React from 'react'
import MobileAboutMe from '../mobileAboutMe/mobileAboutMe'
import MobileCertificate from '../mobileCertificate/mobileCertificate'

const MobileAbout = () => {
  return (
    <div className='MobileAbout'>
        <div className="MobileAboutNav">MobileAboutNav</div>
        <div className="MobileAboutCompenents">
          MobileAboutCompenents
          <MobileAboutMe />
          
      <MobileCertificate />
          </div>
        </div>
  )
}

export default MobileAbout