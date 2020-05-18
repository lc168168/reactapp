import React, { Component } from 'react'
import { connect } from "react-redux"
import { Sampledata } from "@/actions/sample"
import { Pagination } from 'antd';
import "./style.less"
export default @connect( state => {
  return {
    list: state.sample.sample,
    count: state.sample.count
  }
},{
  Sampledata,
})

class Sample extends Component {
  state={
    sample:[]
  }
  componentDidMount() {
    this.props.Sampledata(1)
  }
  onChange = e => {
    console.log(e)
    this.props.Sampledata(e)
  }
  render() {
  //  console.log(this.props.list,this.props.count)
    return (
      <div className="samplebox">
      {
          this.props.list.map((res) => {
            return (
              <div key={res.id}>
                <p>{res.id}</p>
                <p>{res.title}</p>
              </div>
          )
          })
        }
      <Pagination 
        defaultCurrent={1} 
        total={Number(this.props.count)}
        onChange={this.onChange}
       
        />
      </div>
    )
  }
}
