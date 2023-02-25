import React from "react";

export default function alert(props) {
  return (
    <div style={{height:'40px'}}>
    {props.alert && <div>
      <div className="alert alert-success" role="alert">
      <strong>{props.alert.type}: </strong>{props.alert.msg}
      </div>
    </div>}
    </div>
  );
}
