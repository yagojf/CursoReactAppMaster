import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
class Post extends Component {
    constructor() {
        super();
        this.state = {
            name: 'GrandChase',
            likes: 0,
            isFavorite: false,
            comments: ['Comentários']
        }

        //localStorage.setItem()
    }

    componentDidMount() {
        let state = localStorage.getItem(this.props.storageKey);
        state = JSON.parse(state);
        this.setState(state);

    }

    giveLike() {
        
        let numLikes = this.state.likes;
        
        numLikes = numLikes + 1;
        const newState = {
            name: 'Baraky com Likes',
            likes: numLikes
        }
        console.log('GIVELIKES');
        this.setState(newState);
        this.saveInStorage();
    }


    setFavorite() {
        let favorite = this.state.isFavorite;
        favorite = !favorite;
        this.setState({ isFavorite: favorite });
        this.saveInStorage();
    }

    newComment() {
        //PEGAR O ESTADO ATUAL
        let comments = this.state.comments;
        //MUDAR ELE
        const newCommentText = prompt('DIGITE SEU COMENTÁRIO');
        comments.push(newCommentText);
        //SETAR NO ESTADO
        this.setState({ comment: comments });
        this.saveInStorage();
    }

    saveInStorage() {
        let actualState = this.state;
        actualState = JSON.stringify(actualState);
        localStorage.setItem(this.props.storageKey, actualState);
    }

    render() {
        console.log('RENDER DO APP - ', this.state);

        let favoriteText = 'FAVORITO';

        if (this.state.isFavorite) {
            favoriteText = "REMOVER DOS FAVORITOS";
        } else {
            favoriteText = "FAVORITO";
        }

        return (

<div class="panel panel-primary">
            <Card>
                <CardText>


                    <h3>{this.props.text}</h3>
                    <h3>{this.state.name}</h3>
                    {/* <h4>{'Likes:' + this.state.likes}</h4> */}

                    <button class="btn btn-primary" type="button" backgroundColor='#4682B4'
                        label={'Like'}
                        onClick={this.giveLike.bind(this)}>
                            Likes 
                    <span class="badge">{this.state.likes}</span>
                    {/* <FlatButton
                         /> */}
                    </button>

                    <button class="btn btn-primary" type="button" backgroundColor='#4682B4'
                        label={favoriteText}
                        onClick={this.setFavorite.bind(this)}>
                        Favoritos     
                    {/* <FlatButton
                         /> */}
                        </button>


                <button class="btn btn-primary" type="button" backgroundColor='#4682B4'
                        label={'Comentar'}
                        onClick={this.newComment.bind(this)}>   
                        Comentários    
                    {/* <FlatButton
                
                         /> */}

                        </button>
<div class="panel panel-primary">
                    <div style={{ padding: 15, backgroundColor: '#DCDCDC' }}>
                        {this.state.comments.map(function (text, index) {
                            return (<h4 key={index}>{text}</h4>);
                        })}
</div>
                    </div>
                </CardText>
            </Card>
</div>
        );
    }
}

export default Post;
