import logo from './logo.svg';
import * as classes from './App.module.scss';
import TextEditor from './components/TextEditor';
import marked from "marked";
import React, { Component } from 'react';

class App extends Component {
  defaultText = "# H1\n"+ "## H2\n" +
  "\`printf('goodbye world!')\`\n"+
  "\`\`\` \n printf('goodbye world!') \n \`\`\` \n"+ "[title](https://www.example.com) \n" +  
  "1. First item 2. Second item 3. Third item \n "+" 'span' \n " + " 	> blockquote  \n"+"![alt text](https://www.w3schools.com/images/lamp.jpg)  "+ " **bold text**  "

  constructor(props){
    super(props);

    const html = marked(this.defaultText);
    this.state = {
      html: html,
      defaultText: this.defaultText
    }
  }

  textAreaChangeHandler = (event) => {
    const transformedHTML = marked(event.target.value);

    this.setState({
      html: transformedHTML,
      defaultText: event.target.value
    });
  }

  render() {
    return (
      <div className={classes.App}>
        <header className="App-header">
        </header>
  
        <main>
          <div className={classes.Container}>
            <div className={classes.TextEditor}>
              <TextEditor header="Editor" isEditor={true} onTextAreaChanged={(event) => this.textAreaChangeHandler(event)} value={this.state.defaultText}></TextEditor>
            </div>
            <div className={classes.TextPreviewer}>
              <TextEditor header="Previewer" isEditor={false} value={this.state.html}></TextEditor>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
