import React, { Component } from 'react';
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import Bands from '../components/Bands'

class BandsContainer extends Component {



  render() {
    return(
      <div>
        BandsContainer
        <BandInput
        addBand={this.props.addBand}   
         />
         <Bands
        bands={this.props.bands}
          />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   console.log(state)
//   return {
//     bands: state.bands
//   }
// }

// const mapDispatchToProps = (dispatch) => {
  
//   return {
//     addBand: formData => dispatch({
//       type: "ADD_BAND",
//       payload: formData
//     }) 
//   }
// }

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(BandsContainer)
