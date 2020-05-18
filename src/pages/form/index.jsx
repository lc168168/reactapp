import React, { Component } from 'react'
import "./style.less"
import FormTop from "@/pages/form/formtop"
import FormFot from "@/pages/form/formfot"
export default class FormList extends Component {
  render() {
    return (
      <div className="formbox">
          <div className="top">
              <FormTop/>
          </div>
          <div className="fot">
              <FormFot/>
          </div>
      </div>
    )
  }
}
