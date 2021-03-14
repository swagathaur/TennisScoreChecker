//Convert the input file into MatchData[], and return error messages if it fails.
function ConvertTextfileToMatchdata(file: any): any {
    //Read the file and early out an error if it fails
    const fileContents = ReadFileToText(file);
    if (fileContents === -1)
        return "Could not read file";

    //Seperate the text everywhere a 'Match' keyword is found
    
    

    return "Conversion not implemented";
}

function ReadFileToText(file: any) {
    let text: string | ArrayBuffer;
    let reader = new FileReader();
    reader.addEventListener('load', (event) => {
        text = event.target.result;
    })
    try {
        reader.readAsText(file);
    } catch (error) {
        return -1
    }
}

export default ConvertTextfileToMatchdata;
