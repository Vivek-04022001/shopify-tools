import React from 'react'

import InputDataContainer2 from '../components/InputData/InputDataContainer2'
import DisplayContainer2 from '../components/DisplayComponent/DisplayContainer2'
const FindWinningProduct = () => {
  return (
    <section className="container md:max-w-7xl mx-auto md:mt-10 mt-0">
      <div className="flex flex-col md:flex-row justify-between gap-4 px-6 py-10 md:py-4">
        <InputDataContainer2 />
        {/* <DisplayContainer2 /> */}
      </div>
    </section>
  )
}

export default FindWinningProduct