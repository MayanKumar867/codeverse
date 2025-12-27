import React from 'react'
import Welcome from './_components/Welcome'
import EnrolledCourses from './_components/EnrolledCourses'
import ExploreMore from './_components/ExploreMore'
import RequestFriend from './_components/RequestFriend'
import Status from './_components/Status'
import UpgradeToPro from './_components/UpgradeToPro'
import MoreCourses from './_components/MoreCourses'

const Dashboard = () => {
    return (
        <div className='p-10 md:px-20 lg:px-32 xl:px-48'>
            <div className='grid grid-cols-3 gap-7'>
                <div className='col-span-2'>
                    <Welcome/>
                    <EnrolledCourses/>
                    <MoreCourses/>
                    <ExploreMore/>
                    <RequestFriend/>
                </div>
                <div>
                   {/* Right side */}
                   <Status/>
                   <UpgradeToPro/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
