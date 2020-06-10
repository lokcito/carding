import React from "react"
import Card from './Card';

class GroupCard extends React.Component {
  render(){
    return (
      <div>
      {this.props.device === "mobile" ? (
        <div class="ui two cards">
          <div class="card basic">
            <div class="content">
              <Card />
            </div>
          </div>
          <div class="card basic">
            <div class="content">
              <Card />
            </div>
          </div>
        </div>):(
      <div class="ui five cards">
        <div class="card basic">
          <div class="content">
            <Card />
          </div>
        </div>
        <div class="card basic">
          <div class="content">
            <Card />
          </div>
        </div>
        <div class="card basic">
          <div class="content">
            <Card />
          </div>
        </div>
        <div class="card basic">
          <div class="content">
            <Card />
          </div>
        </div>
        <div class="card basic">
          <div class="content">
            <Card />
          </div>
        </div>
      </div>)}
      </div>
    )
  }
}

export default GroupCard;