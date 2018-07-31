import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">React Redux CommentBox <FontAwesomeIcon icon="stroopwafel" /></h1>
            <p className="lead">A simple commentbox which is fully powered with react, redux, bootstrap and enzyme!</p>
            <CommentBox />
            <CommentList />
            <hr className="my-4" />
            <p>Made by
                    <a href="http://emaddehnavi.com">Emad Dehnavi</a>
            </p>
        </div>
    )
}