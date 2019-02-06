import React, { Component, Fragment } from 'react';
import Article from './Article';
import Topics from './Topics';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import {selectors} from '../../store';

const HomePage = ({articles}) => {
  return (
    <div>
      <Topics />
      {
        articles.map((article) => <Article key={article.name} {...article} />)
      }
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    articles: selectors.getHPData(store)
  }
};


export default connect(mapStateToProps)(HomePage)
