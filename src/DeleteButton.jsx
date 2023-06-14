import React from "react";
import "./Style.css"

function DeleteButton({id, onDelete}) {
    return <button className="data-item-delete" onClick={() => onDelete(id)}>X</button>
}
export default DeleteButton;