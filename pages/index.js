import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Head from 'next/head'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {useState} from 'react'
import Stack from '@mui/material/Stack'
import Input from '@mui/material/Input'


import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

const actionStyle = {
  backgroundColor: '#b3ffb3',
  magin:'auto',
  marginTop:'5%',
  borderRadius:'5%',
  padding:'3%'

}

const header1 = {

  fontFamily: 'Righteous',
    fontSize:'64px'
}

export default function ButtonAppBar() {

const NEXT_ONEPIPE_BACKEND = `http://localhost:5670`
  const [removeForm ,setRemoveForm] = useState(false)
  const [data ,setData] = useState(null)


  const classes = useStyles()

  const ariaLabel = { 'aria-label': 'description' }


function goPage(dir){
      
       

window.location.assign(`/${dir}`)


}





  return (
    <div className={classes.root}>
    <Container>
 

    
        {true &&

          (<>
          
      


        { !removeForm && (<>
          
          <Typography>
        onepipe mock menu
          </Typography>
           
              
              <Button style={{marginBottom:'5%'}} variant="outlined" size='small'  id='statement' onClick={()=>goPage('statement')}>GENERATE STATEMENT</Button>

              <Button style={{marginBottom:'5%'}} variant="outlined" size='small'  id='collect' onClick={()=>goPage('collect')}>PAY</Button>

              <Button style={{marginBottom:'5%'}} variant="outlined" size='small'  id='account' onClick={()=>goPage('account')}>OPEN ACCOUNT</Button>

              <Button style={{marginBottom:'5%'}} variant="outlined" size='small'  id='balance' onClick={()=>goPage('balance')}>CHECK BALANCE</Button>

         

           
          </>)
        } 
                                   
                   </>)

      }

  </Container>

    </div>
  );
}
