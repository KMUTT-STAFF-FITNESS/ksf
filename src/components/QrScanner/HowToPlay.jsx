import React, { Component } from 'react'


class HowToPlay extends Component {
  state = {
    result: 'คำอธิบายที่ 1,2,3,4'
  }
  render() {
    return (
      <div>
        <video controls>
          <source src={"video_test/test.mp4"} type='video/mp4' />
        </video>

        <div class="text">
                <p className="text-gray-700 text-lg font-bold">คำอธิบาย</p>
         </div>
        <p>{this.state.result}</p>
      </div>
    )
  }

}

export default HowToPlay;