import React from 'react'
import {connect} from 'react-redux'
import {fetchHomePageData} from '../store'

import HomePage from '../components/HomePage'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(fetchHomePageData(isServer))
    return {}
  }

  render () {
    return (
      <HomePage />
    )
  }
}

export default connect()(Index)
