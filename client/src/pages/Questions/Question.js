import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Question({ questionIdx }) {
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    const body = {
      questionIdx: params.questionIdx,
    };
    axios
      .post(`/questions/${questionIdx}`, body)
      .then((response) => {
        setData(response.data.question);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  const handleEditBtn = () => {};
  const handleDeleteBtn = () => {};
  return (
    <div>
      <button type="button" onClick={handleEditBtn}>
        Edit
      </button>
      <button type="button" onClick={handleDeleteBtn}>
        Delete
      </button>
      <div>{data.title}</div>
      <div>{data.content}</div>
      <div>{data.writer}</div>
    </div>
  );
}

export default Question;
