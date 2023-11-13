import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = ({isLoading}:{isLoading:boolean}) => {
    const [open, setOpen] = React.useState(isLoading);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Loader
