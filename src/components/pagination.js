import React from "react";

const Pagination = (props) =>{
    const {page, totalPages, onLeftClick, onRightClick} = props
    return(
        <div className="flex font-semibold items-stretch">
            <button onClick={onLeftClick}><div className="scale-110">⬅️</div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div className="scale-110">➡️</div></button>
        </div>
    )

}
export default Pagination; 