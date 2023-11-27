'use client'
import Signup from '@/components/auth/Signup'
import { Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const MidPage = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid container className="h-full pt-6">
    {isSmall && (
      <Grid
        container
        item
        xs={0}
        sm={0}
        md={8}
        justifyContent={"center"}
        className="relative"
      >
        {/* <Image src={signupSideImage} fill objectFit="cover" alt='Image' /> */}
      </Grid>
    )}
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={4}
      justifyContent={"center"}
      className="h-full"
    >
      <Grid item xs={11} sm={11} md={11}>
        <Signup />
      </Grid>
    </Grid>
  </Grid>
  )
}

export default MidPage
