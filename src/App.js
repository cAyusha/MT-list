import React from "react";
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';

export default function App() {
const medicalTreatmentListAsJson = 
'[ {"treatId": "21420", "treatCourseId":" 683", "type": " Major", "category": " Cancer ", "name": " Alex Nepali", "startDate": " 19/11/21"} ,' +
    '{"treatId": "403", "treatCourseId":" 782", "type": " Minor", "category": " Fever", "name": " James Shah", "startDate": "  23/10/21"} ,' +
    '{"treatId": "404", "treatCourseId":" 231", "type": " Major", "category": " Kidney Failure", "name": " Sarah Gurung", "startDate": " 16/08/19"} ,' +
    '{"treatId": "405", "treatCourseId":" 3895", "type": " Major", "category": " Bipolar Disorder", "name": " Lucy Ramsey", "startDate": " 19-08-2019"} ,' +
    '{"treatId": "406", "treatCourseId":" 1093", "type": " Major", "category": " Brain Injury", "name": " Anda Tamang", "startDate": " 11-11-2019"} ]';



  return (
    <div>
      <MedicalTreatmentList json = {medicalTreatmentListAsJson}/>
    </div>
  );
}
