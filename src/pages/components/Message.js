import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Message( {open, setOpen, message, type } ) {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={ () => setOpen(false) }>
        <Alert onClose={ () => setOpen(false) } severity={ type }>
          { message }
        </Alert>
      </Snackbar>
    </div>
  );
}
