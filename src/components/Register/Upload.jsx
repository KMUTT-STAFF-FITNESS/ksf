import React from 'react'
// import axios, { post } from 'axios';

class Upload extends React.Component {

    state = {

        selectedFile: null
    };


    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });

    };

    onFileUpload = () => {

        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);

        // axios.post("api/uploadfile", formData);
    };


    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    Please upload the file and press the upload button. Before pressing the next button.
                </div>
            );
        }
    };

    render() {

        return (
            <div>
                <p className="text-gray-700 text-lg font-bold">Upload Slip</p>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button className="buttonLogin" onClick={this.onFileUpload}>
                Upload
            </button>

                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default Upload; 