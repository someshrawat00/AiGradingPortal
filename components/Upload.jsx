import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/upload.module.css';
import bgImage from '../assets/bg.png';
import uploadImage from '../assets/folder.png';
import Button from './Button';

export default function Upload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  return (

    <form onSubmit={handleUpload}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1>{file !== null ? "Assignment Uploaded Successfully " : "Upload Assignment PDF for grading"}</h1>
        {file !== null ? (
          <div className={styles.uploadedBox}>
            <h1>{file.name}</h1>
            <Button onClick={() => navigate('/result')} >Grade</Button>
          </div >) : (
          <div className={styles.uploadBox}>
            <input type="file" accept=".pdf" onChange={handleUpload} />
            <p>Drag and Drop Files Here</p>
            <img src={uploadImage} alt="" width={180} />
            <Button >Upload</Button>
          </div>
        )
        }
      </div>
    </form >
  )
}

