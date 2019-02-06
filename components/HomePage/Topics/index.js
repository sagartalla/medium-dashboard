import  React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {selectors, filterData} from '../../../store';

const Topics = ({topics, filterData}) => {
  const onFitlerCurry = (topic) => {
      return () => {
          filterData(topic);
      }
  }

  return (
    <div>
      <ul>
      {
        topics.map((t) => <li onClick={onFitlerCurry(t.name)}>{t.name}</li>)
      }
      </ul>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    topics: selectors.getTopics(store)
  }
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      filterData: filterData
    },
    dispatch,
  );
}




export default connect(mapStateToProps, mapDispatchToProps)(Topics)
