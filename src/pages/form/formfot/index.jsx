import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import "./style.less"
import { Table, Divider, Tag } from 'antd';

import { connect } from 'react-redux'
import { getformdata } from '@/actions/formone'
import { post } from "@/utils/request"
import api from "@/services/api"
export default @connect(state => {
    return {
        data: state.form.data,
    }
},{
    getformdata,
})
@withRouter
class index extends Component {
    state={
        data:[]
    }
    componentDidMount() {
    // view -> action -> reducer
  
        this.props.getformdata()
    }
    deletedata = (res) => {
      post(api.shanchu,{id:res.id}).then(res => {
        if(res.status==="200")
        {
          this.props.getformdata()
        }
      })
    }
    updata = (res) => {
      
    }
  
    render() {
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'hospital',
          dataIndex: 'hospital',
          key: 'hospital',
        },
      
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
              <a onClick={()=>this.updata(record)}>updata</a>
              <Divider type="vertical" />
              <a onClick={()=>this.deletedata(record)}>Delete</a>
            </span>
          ),
        },
      ]
    
      const { data } = this.props
      console.log(this.props)
        return (
            <div className="formfot">
               <Table columns={columns} dataSource={data} rowKey={record => record.id}/>
            </div>
        )
    }
}
