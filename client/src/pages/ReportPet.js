import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button} from 'antd';

export default function ReportPet() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Report Pet Form</h2>

      <div>
        {location.pathname !== '/' && (
          <Button
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </Button>
        )}
      </div>
    </div> 
  )
}