import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tablelist } from '@/actions/table'
import './style.less'
import {post} from "@/utils/request"
import api from "@/services/api"
import { Form, Icon, Input, Button, Checkbox,Upload } from 'antd';
export default @connect(({ table }) => ({
  users: table.users
}), {
  tablelist,
})
@Form.create({
  
})
class Table extends Component {
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        post(api.tianjia,{
          name:values.name,
          age:values.age,
          hospital:values.upload.file.name
        }).then(res => {
          if(res.status==="200")
          {
             this.props.history.push("/home/form")
          }
        })
        console.log(values)
      }
    });
 
  };
  componentDidMount () {
    this.props.tablelist()
  }

 

  render() {
    const { getFieldDecorator } = this.props.form;
   
    
    return (
      <div className="table">
      <Form onSubmit={this.handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="name" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="name"
          />,
        )}
      </Form.Item>
      <Form.Item>
      {getFieldDecorator('age', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
        <Input
          prefix={<Icon type="age" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="age"
        />,
      )}
    </Form.Item>
                <Form.Item>
                  {getFieldDecorator('upload',)(
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button>
                        <Icon type="upload" /> Click to upload
                      </Button>
                    </Upload>,
                  )}
                </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          添加 
        </Button>
      </Form.Item>
    </Form>
      </div>
    )
  }
}
