import React, { useState, useEffect } from 'react';
import { Repo } from './api/services/repository';

class Judgement extends React.Component {


  render() {
    // const r = new Repo()
    // const result = r.UserTopics('user123')
    // console.log(result)
    return (
      < div > Title
        < div > {this.props.value}</div >
      </div >
    );
  }
}


export default Judgement;