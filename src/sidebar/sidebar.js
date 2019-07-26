import React from 'react';
import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/ListGroup'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'

import {articles} from '../const'


export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    showTooltip = ()=>{
        console.log("asdf")
    }
    
    render() {
        const articleList = articles.map(article=>{
            return (
                <OverlayTrigger show={this.showTooltip()} trigger='click' placement="left" key={article.title} overlay={
                <Tooltip id={article.title}>
                    <span>{article.page}</span>
                    <div><a href={article.url}>article url</a></div>
                    </Tooltip>
                }>
                    <ListGroup.Item>
                        {article.title}
                    </ListGroup.Item>
                </OverlayTrigger>
            )
        })
        // console.log(articleList);
        return (
            <div>
               <ListGroup>
                   {articleList}
  {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
</ListGroup>
            </div>
        );
    }
}