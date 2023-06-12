import React, { useState } from 'react';

function SentenceList() {
  const [sentences, setSentences] = useState([]);

  const addSentence = () => {
    const newSentence = `Sentence ${sentences.length + 1}`;
    setSentences([...sentences, newSentence]);
  };

  const removeSentence = () => {
    if (sentences.length > 0) {
      const updatedSentences = [...sentences];
      updatedSentences.pop();
      setSentences(updatedSentences);
    }
  };

  return (
    
 <>
   <hr className='mt-5'/>
    <div className='d-flex align-items-center justify-content-center mt-5'>
        <div className=''>
      <button className='px-4 py-2 me-2 fs-3 fw-bold' onClick={addSentence}>Add</button>
      <button className='px-4 py-2  fs-3 fw-bold' onClick={removeSentence}>Remove</button>
      <ul className=''>
        {sentences.map((sentence, index) => (
          <li className='fw-bold fs-5 text-danger'key={index}>{sentence}</li>
        ))}
      </ul>
    </div>

  </div>
 </>
  );
}

export default SentenceList;
