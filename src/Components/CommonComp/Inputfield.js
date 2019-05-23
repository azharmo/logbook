import React from 'react'
import {MDBInput } from "mdbreact";
function Inputfield(props){
    return(
        <div>
        <MDBInput
                value={props.statevalue}
                name={props.name}
                onChange={props.onChange}
                type={props.type}
                id={props.id}
                label={props.label}
                
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
        </div>

    )
}
export default Inputfield