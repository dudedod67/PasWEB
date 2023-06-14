import React from "react";

class InputData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            desc: "",
            // file: null,
        }
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onFileChangeEventHandler = this.onFileChangeEventHandler.bind(this);
        this.onDescChangeEventHandler = this.onDescChangeEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState (() => {
            return {
                nama: event.target.value,
            }
        });
    }

    onDescChangeEventHandler(event) {
        this.setState(() => {
            return{
                desc: event.target.value,
            }
        });
    }

    onFileChangeEventHandler(event) {
        this.setState({
            file: event.target.files[0], 
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addData(this.state);
        this.setState(() => {
            return{
                nama: "", 
                desc: "",
                // file: null,
            };
        });
    }

    render() {
        return [
            <form className="data-input" onSubmit={this.onSubmitEventHandler}>
                <form onSubmit={this.handleSubmit}></form>
                
                <input 
                type="text"
                placeholder="Nama"
                value={this.state.nama}
                onChange={this.onNameChangeEventHandler}
                />

                <input 
                type="text"
                placeholder="Desc"
                value={this.state.desc}
                onChange={this.onDescChangeEventHandler}
                />

                <input type="file" 
                accept="image/*"
                onChange={this.onFileChangeEventHandler}
                />
                
                <button type="submit">Tambah</button>
            </form>
        ]
    }
}
export default InputData