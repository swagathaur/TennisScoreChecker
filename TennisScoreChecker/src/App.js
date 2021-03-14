import React, { Component } from 'react';
import ConvertTextfileToMatchdata from './types/ConvertTextfileToMatchdata';
import FileToMatchConverter from './components/FileToMatchConverter'

class App extends Component {

  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  //Change state when file selected
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  //Content to display after file change
  fileData = () => {
    if (this.state.selectedFile) {
      return <FileToMatchConverter blob={this.state.selectedFile}/>
    }
  };

  render() {
    return (

      <div>
        <h1>Tennis Score Converter.</h1>
        <h2>About this program.</h2>
        <p>
          This program accepts text files in the format listed
          <a href='https://github.com/swagathaur/TennistScoreChecker'> here</a>
          . It then parses that data into an easy-to-use format, and displays the results.
          </p>
        <h2>Upload a File</h2>
        <div>
          <input type="file" onChange={this.onFileChange} />
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default App;