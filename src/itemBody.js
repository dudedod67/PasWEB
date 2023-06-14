import React from "react";

function ItemBody({name, deskripsi, createdAt}){
    return(
        <div className="itemBody">
            <h1>{name}</h1>
            <p>{deskripsi}</p>
            <p>{createdAt}</p>
        </div>
    )

}
export default ItemBody;