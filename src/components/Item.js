import React, {Component} from 'react';

const baseUrl = 'https://www.reddit.com/r/motorcycles/comments/';
const urlTail = '.json';

class Item extends Component {
    state = {
        comments: [],
        id: '',
        toggled: false
    }

    componentWillMount() {
        this.setState({id: this.props.itemData.id});
    }
    
    render() {
        let {thumbnail, title} = this.props.itemData;
        let hasThumb = !(thumbnail === 'self' || thumbnail === 'nsfw');
        return (
            <div className="item" onClick={() => this.toggleComments(this.state.id)}>
                <div className="item-header">
                    <h3 className="item-title">{title}</h3>
                    <img className="item-thumbnail" src={hasThumb ? thumbnail: 'placeholder.png'}
                        alt={hasThumb ? 'Item thumbail' : 'Placeholder thumbnail'} />
                </div>
                <ul>{this.state.comments.map((comment) => {
                    return this.renderCommentsRecursive(comment);
                })}</ul>
            </div>
        );
    };

    renderCommentsRecursive(comment) {
        let body = <li className="comment"><span className="author">{comment.data.author}:</span> {comment.data.body}</li>;
        let children = [];
        if(comment.data.replies) {
            if(comment.data.replies.data.children.length) {
                children = <ul>{comment.data.replies.data.children.map((child) => {
                    return this.renderCommentsRecursive(child);
                })}</ul>;
            }
        }
        
        return (
            [body, children]
        );
    }
    
    // On item click, populate and expand comment section
    toggleComments = (id) => {
        if(this.state.toggled) {
            this.setState({
                comments: [],
                toggled: !this.state.toggled
            });
        }
        else {
            let fetchUrl = baseUrl + id + urlTail;
            console.log('url: ' + fetchUrl);
            fetch(fetchUrl)
                .then(response => {
                    let responseJson = response.json();
                    return responseJson;
                })
                .then(json => {
                    this.setState({
                        comments: json[1].data.children,
                        toggled: !this.state.toggled
                    });
                });
        }
    }
}

export default Item;