import React from 'react';
import { Button } from '@mui/material';
import { usePDF } from 'react-to-pdf';
import DownloadIcon from '@mui/icons-material/Download';

const DownloadResume = ({ children }) => {
  const { toPDF, targetRef } = usePDF({
    filename: 'raj-pratap-singh-resume.pdf',
    page: {
      format: 'A4',
      orientation: 'portrait',
      margin: 20
    },
    canvas: {
      mimeType: 'image/jpeg',
      qualityRatio: 1
    }
  });

  return (
    <>
      <div ref={targetRef}>
        {children}
      </div>
      <Button
        variant="contained"
        onClick={() => toPDF()}
        startIcon={<DownloadIcon />}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          bgcolor: '#3b82f6',
          '&:hover': {
            bgcolor: '#2563eb'
          },
          zIndex: 1000
        }}
      >
        Download Resume
      </Button>
    </>
  );
};

export default DownloadResume;