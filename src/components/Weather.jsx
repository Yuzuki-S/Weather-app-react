import React from 'react';



class Weather extends React.Component{
  render() {
    return (
      <div>
        <p>City: 
       {this.props.city}
       </p>
       <p>
       {this.props.country}
       </p>
       <p>
       {this.props.temperature}
       </p>
       <p>
       {this.props.humidity}
       </p>
      </div>
    )
  }
}

export default Weather