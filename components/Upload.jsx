import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/upload.module.css';
import bgImage from '../assets/bg.png';
import uploadImage from '../assets/folder.png';
import Button from './Button';
import { useLoading } from '../contexts/LoadingContext';
import { gradePDFwithGemini } from "../geminiGrader";
import { ResultContext } from '../contexts/resultContext';

export default function Upload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const { showLoading, hideLoading } = useLoading();
  const { setResult } = React.useContext(ResultContext);

  const handleUpload = async(e) => {
    e.preventDefault();
    showLoading("Grading Assignment");
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    const result = await gradePDFwithGemini(uploadedFile);
    console.log(result);
    const parsedResult = await JSON.parse(result);
    setResult(parsedResult); 
    hideLoading();
    navigate('/result');
  };


  return (

    <div >
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className={styles.bgStar}>
        </div>
        <h1>{file !== null ? "Assignment Uploaded Successfully " : "Upload Assignment PDF for grading"}</h1>
        <div className={`${styles.uploadContainer} ${file ? styles.expanded : ""}`}>
          {file !== null ? (
            <div className={styles.uploadedBox}>
              <h1>{file.name}</h1>
              <Button onClick={() => handleGrade()}>Grade</Button>
            </div >
          ) : (
            <div className={styles.uploadBox}>
              <input type="file" accept=".pdf" onChange={handleUpload} />
              <p>Drag and Drop Files Here</p>
              <img src={uploadImage} alt="" width={200} />
              <Button style={{ width: "300px", height: "70px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }} >Upload</Button>
            </div>
          )
          }
        </div>
      </div>
    </div >
  )
}

