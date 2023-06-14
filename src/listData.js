import React from "react";
import ItemData from "./itemData";

function ListData ({dataList,onDelete}){
    return(
        <div>
            {
                dataList.map((data)=>(
                    <ItemData 
                        key={data.id}
                        id={data.id}
                        onDelete={onDelete}
                        createdAt={data.createdAt}
                        {...data}
                    />
                ))
            }
        </div>
    );
}
export default ListData;