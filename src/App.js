import React from "react";
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';

export default function App() {
const medicalTreatmentListAsJson = 
'[{"treatId":"1256", "treatCourseId": "24120","type":"A", "category":"cancer", "startDate": "20/23/20","name": "dash"}]'





  return (
    <div>
      <MedicalTreatmentList json = {medicalTreatmentListAsJson}/>
    </div>
  );
}
