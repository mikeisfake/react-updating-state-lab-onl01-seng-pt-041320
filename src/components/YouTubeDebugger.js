import React from 'react'

export default class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p',
        }
      }
    })
  }

  render() {
    return(
      <div className="btns">
        <button className="bitrate" onClick={this.handleBitrateClick}>bitrate</button>
        <button className="resolution" onClick={this.handleResolutionClick}>resolution</button>
      </div>
    )
  }

}
