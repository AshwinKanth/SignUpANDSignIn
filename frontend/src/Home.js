import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {banana: 0, mango: 0}

  mangosCount = () => {
    const {mango} = this.state
    if (mango >= 0) {
      this.setState(prevState => ({mango: prevState.mango + 1}))
    }
  }

  bananasCount = () => {
    const {banana} = this.state
    if (banana >= 0) {
      this.setState(prevState => ({banana: prevState.banana + 1}))
    }
  }

  render() {
    const {banana, mango} = this.state
    return (
      <div className="bg-container text-center">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="fruits-container d-flex flex-row align-items-center justify-content-center mt-4">
            <div className="fruit-container d-flex flex-column align-items-center">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img" 
                width="400" height="400"
                alt="mango"
              />
              <button
                className="button"
                onClick={this.mangosCount}
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-container d-flex flex-column align-items-center">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img"
                width="400" height="400"
                alt="banana"
              />
              <button
                className="button"
                onClick={this.bananasCount}
                type="button"
              >
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home