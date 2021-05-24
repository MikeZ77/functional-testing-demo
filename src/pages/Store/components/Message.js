import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Message( { open, setOpen, setCurrentSnack, message, type } ) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const handleExited = () => {
    setCurrentSnack(false)
  }

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={ handleClose } onExited={ handleExited }>
        <Alert onClose={ handleClose } severity={ type } aria-labelledby={ message }>
          { message }
        </Alert>
      </Snackbar>
    </div>
  );
}
