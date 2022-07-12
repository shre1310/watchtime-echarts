import React from 'react';
import {AverageWatchTime} from './component/AvegeWatchTime_gitvercel';
import VercelApp from './component/AverageWatchtime_vercelapp/VercelApp'

const PosthogApi = () => {
  

  return (
    <>
      <div>
        <AverageWatchTime />
        <VercelApp />
      </div>
      </>
  )
}



export default PosthogApi

