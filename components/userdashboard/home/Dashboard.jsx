import React from 'react'
import CompletedTask from '../tasks/CompletedTask'
import PendingTask from '../tasks/PendingTask'
import PieChart from './Chart'
import CurrentTask from './CurrentTask'
import Messages from './Messages'
import User from './User'

function Dashboard() {
  return (
    <div className="lg:my-8 grid grid-cols-1 lg:grid-cols-7  lg:h-[calc(100vh-7rem)] lg:grid-rows-5 gap-y-8 lg:gap-8">
        <div className='lg:col-span-3 h-[300px]  col-span-1 lg:row-span-2'>
            <User />
        </div>
        <div className='lg:col-start-4 -mt-12  md:-mt-0 lg:row-span-3 lg:col-span-4 '>
            <CurrentTask type="current" duration="12 days" deadline="May 30th" header="Build An Authentication Page" content=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ad debitis ipsa quod quos impedit doloremque, in fugit illo reiciendis et beatae dolores sunt dolorum excepturi nihil magnam distinctio officia." />
        </div>
        <div className='lg:row-start-3 lg:col-span-3 lg:row-span-3 w-full'>
             <PieChart pending_task={3}  completed_task={4} in_progress={2} />
        </div>
        <div className='lg:row-start-4 lg:col-start-4 lg:col-span-4 lg:row-span-2 w-full'>
            <Messages />
        </div>
    </div>
  )
}

export default Dashboard