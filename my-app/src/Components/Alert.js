import React from "react";

export default function alert(props) {
  return (
    props.alert && <div>
      <div class="alert alert-success" role="alert">
      <strong>{props.alert.type}: </strong>{props.alert.msg}
      </div>
    </div>
  );
}
