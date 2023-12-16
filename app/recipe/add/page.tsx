import { Grid } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
  title:{
    template:'%s | Add',
    default:'Add',
  }
}
const page = () => {
  return (
    <Grid container justifyContent={'center'} spacing={2}>
        <Grid item xs={12} sm={7} md={8} lg={6}>
            FIRST
        </Grid>
        <Grid item xs={12} sm={5} md={4} lg={6}>
            SECOND
        </Grid>
    </Grid>
  )
}

export default page
