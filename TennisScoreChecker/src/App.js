import React, { Component } from 'react';
import ConvertTextfileToMatchdata from './types/ConvertTextfileToMatchdata';
import TennisScoreForm from './TennisScoreForm'
import MatchData from './types/MatchData'

class App extends Component {

  state = {
    // Initially, no file is selected
    selectedFile: null,
    selectedFileIsValid: false
  };

  //Change state when file selected
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  //Content to display after file change
  fileData = () => {
    if (this.state.selectedFile) {
      const matchData = ConvertTextfileToMatchdata(this.state.selectedFile);

      let output;
      if ((typeof matchData === "string")) {
        output = <h3>{matchData}</h3>
      }
      else if ((matchData.type === MatchData)) {
        output = <TennisScoreForm playerX={matchData.playerX}
          playerY={matchData.playerY} 
          winner={matchData.winner} 
          totalSets={matchData.totalSets} 
          />
      }
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          {output}
        </div>
      );
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