import React from "react";
import ItemBody from "./itemBody";
import ItemImage from "./itemImage";
import DeleteButton from "./DeleteButton";

function ItemData({nama, desc, image, id, onDelete, createdAt}){
    return(
            <>
            <div className="card">
                        <DeleteButton id={id} onDelete={onDelete}/>
                        <ItemBody name={nama} deskripsi={desc}/>
                        <ItemImage image={image} className="images"/>
                        <p>CreatedAt : {createdAt}</p>
                </div>    
            </>                
    )
}
export default ItemData;