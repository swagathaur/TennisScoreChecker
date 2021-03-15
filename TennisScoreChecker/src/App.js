import React, { Component } from 'react';
import FileToMatchConverter from './components/FileToMatchConverter'

class App extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
    hasData: false,
  };

  //Change state when file selected
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0], hasData: null });
  };

  //Content to display after file change
  fileData = () => {
    if (this.state.hasData) {
      return <FileToMatchConverter contents={this.state.hasData} />
    }
    else if (this.state.selectedFile) {
      let reader = new FileReader();
      reader.readAsText(this.state.selectedFile);

      reader.onload = () => {
        this.setState({ hasData: reader.result });
      };

      reader.onerror = function () {
        console.log(reader.error);
      };
    }
  };

  render() {
    return (

      <div>
        <h1>Tennis Score Converter.</h1>
        <h2>About this program.</h2>
        <p>
          This program accepts text files in the format listed
          <a href='https://github.com/swagathaur/TennissScoreChecker'> here</a>
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