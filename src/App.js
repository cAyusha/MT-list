import React from "react";
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';

export default function App() {
const medicalTreatmentListAsJson = 
'[{"treatId":"1256", "treatCourseId": "24120","type":"A", "category":"cancer", "startDate": "20/23/20","name": "dash"}]'

'[{"treatId":"234", "treatCourseId": "asd","type":"aq", "category":"sf", "startDate": "20/23/21","name": "hash"}]'






  return (
    <div>
      <MedicalTreatmentList json = {medicalTreatmentListAsJson}/>
    </div>
  );
}
