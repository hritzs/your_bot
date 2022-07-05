import React from "react";
const card = ({name,email,id}) =>{
    return(
        <div className="tc bg-light-pink dib br3 pa3 ma2 grow bw-5 shadow">
            <img alt ='robots' 
            src={`https://robohash.org/${id}?100x100`} />
            <div>
                <h2>{name}</h2>     
                <h2>{email}</h2>     
            </div> 
        </div>
    );
}
export default card;