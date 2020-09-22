import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
// import './index.css'
import { Editor } from '@tinymce/tinymce-react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

type State = {
  htmlText: string
}

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      htmlText: null
    }
}

  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
    this.setState({htmlText: content})
  }

  render() {
    return (
      <div>
      <Editor
      value={this.state.htmlText}
      apiKey='3r33kfdpxviygyz5xv632itqhg8y9r3n0u6xwe64tgdce0de'
      initialValue="<p>This is the initial content of the editor</p>"
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor hr ',
          'searchreplace visualblocks code fullscreen insertdatetime',
          'insertdatetime media table emoticons paste code help wordcount'
        ],
        toolbar:
        'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | link image | print preview media fullpage | ' +
        'forecolor backcolor emoticons | help'
      }}
      onEditorChange={this.handleEditorChange}
    />
    <br />
    <hr />
    { ReactHtmlParser(this.state.htmlText) }
    </div>
    )
  }
}

render(<App />, document.getElementById('root'))