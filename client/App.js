import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './index.css'

class Card extends Component {
  render () {
    return (
      <div className="container" style={{marginTop: '1rem'}}>
        <div className="alert alert-primary">
          This is a primary alert—check it <span className={styles.test}>out</span>!
        </div>
        <ul className="list-group">
          <li className="list-group-item active">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    )
  }
}

export default Card