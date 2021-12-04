import React from "react";
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';

export default function App() {
  const medicalTreatmentListAsJson = 
  '[ {"treatId": "401", "treatCourseId":" 6832", "type": " Major", "category": " Cancer ", "name": " Alex Nepali", "startDate": " 19/11/21"} ,' +'{"treatId": "403", "treatCourseId":" 7821", "type": " Minor", "category": " Fever", "name": " James Shah", "startDate": "  23/10/21"} ,' +'{"treatId": "404", "treatCourseId":" 2311", "type": " Major", "category": " Kidney Failure", "name": " Sarah Gurung", "startDate": " 16/08/19"} ,' +'{"treatId": "405", "treatCourseId":" 3895", "type": " Major", "category": " Bipolar Disorder", "name": " Lucy Ramsey", "startDate": " 19/08/2019"} ,' +'{"treatId": "406", "treatCourseId":" 1093", "type": " Major", "category": " Brain Injury", "name": " Anda Tamang", "startDate": " 11/11/2019"} ]';
  
const data = JSON.parse (medicalTreatmentListAsJson);


   return (
     <div>
      <h1 style={{color: "blue", backgroundColor: "white"}}>List of Medical Records</h1>
      <MedicalTreatmentList json = {medicalTreatmentListAsJson}/>
      <h1> Search Results </h1>

      {data.filter(record => record.type== "U").map (filteredRecord => ( <li> {filteredRecord.name}</li>))}
    </div>
  );
}
