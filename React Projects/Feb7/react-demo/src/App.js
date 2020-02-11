import React from "react";

import Student from "./component/student";
import Events from "./component/events";
import StudentClass from "./component/studentClass"
import FormComponent from "./component/FormComponent"

export default function App() {
  return (
    <div>
      <Student />
      <Events />
      <StudentClass />
      <FormComponent />
    </div>
  );
}
