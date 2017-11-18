import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
class App extends Component {

  constructor() {
    super();
    this.state = {
        posts:[]
    }


}
    
componentDidMount(){
  let state = localStorage.getItem('appState');
  state = JSON.parse(state);
  this.setState(state);
}
saveInStorage(){
  let actualState = this.state;
  actualState = JSON.stringify(actualState);
  localStorage.setItem('appState', actualState);
}
  newPost(){

      //PEGAR O ESTADO ATUAL
      const post = prompt('insira o novo texto do post')
      let posts = this.state.posts;
      posts.push(post);      
      this.setState({post: posts});
      this.saveInStorage();

  }
  setFavorite() {
    let favorite = this.state.isFavorite;
    favorite = !favorite;
    this.setState({ isFavorite: favorite });
    this.saveInStorage();

  }
  render() {


    return (



      <MuiThemeProvider>
        <div style={{ padding: 30, backgroundColor: '#4682B4' }} >


        {this.state.posts.map((post,index)=>{

            return(<Post storageKey={'post' + index} text= {post}/>)

        })}
        
       <FlatButton label= {'Novo Post'} onClick= {this.newPost.bind(this)}   />

          
            
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
