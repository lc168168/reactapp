import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tablelist } from '@/actions/table'
import './style.less'

export default @connect(({ table }) => ({
  users: table.users
}), {
  tablelist
})
class Table extends Component {
  
  componentDidMount () {
    this.props.tablelist()
  }

  render() {
    return (
      <div className="table">
         
      </div>
    )
  }
}
