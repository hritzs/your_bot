import React from "react";
const Searchbox = ({searchfield,searchChange}) =>{
    return(
        <div className="pa2">
            <input 
            className='pa3 ba b--green bg-lighest-blue'
            type='search' 
            placeholder="search box" 
            onChange = {searchChange} 
            />
        </div>
    );
}
 
export default Searchbox;