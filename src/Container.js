import React from "react";
import "./Style.css"
import ListData from "./listData";
import { contactData } from "./utils/data";
import InputData from "./InputData";

class ContainerData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: contactData(),
            file : null
        }   
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddDataHandler = this.onAddDataHandler.bind(this);
    }

    onAddDataHandler({nama, desc, file}) {
        this.setState((prevState) => {
            return {
                dataList: [
                    ...prevState.dataList,
                    {
                        id: +new Date(),
                        nama, 
                        desc,
                        image: URL.createObjectURL(file),
                        createdAt: new Date().toLocaleString(),
                    }
                ]
            }
        })
    }

    onDeleteHandler(id) {
        const dataList = this.state.dataList.filter(contactData => contactData.id !== id);
        this.setState({ dataList })
    }


    render(){
            return (
            <div className="judulHeader">
                <InputData addData={this.onAddDataHandler}/>
                <h1>Top Movie Disney</h1>

                {this.state.dataList.length === 0 ? (
                <p className='null-item'>Tidak ada Postingan  <i class="fa-solid fa-camera-retro"></i></p>
                ) : (
                <ListData
                dataList={this.state.dataList}
                onDelete={this.onDeleteHandler}/>
        )}
            </div>
        );
    }
}
export default ContainerData;