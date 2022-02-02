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


function createAccount(status){
      
       let account_number, email, mobile_no

       account_number = document.getElementById('account_number').value.toLowerCase()
       email = document.getElementById('email').value.toLowerCase()
       mobile_no = document.getElementById('mobile_no').value.toLowerCase()



      if(!( account_number && email && mobile_no )) return alert('incomplete form')
        
        let bodyObject={
      
                        account_number, email, mobile_no
         
        }
           bodyObject = JSON.stringify(bodyObject)

           setRemoveForm(true)

       fetch(`${NEXT_ONEPIPE_BACKEND}/balance`,{method:'post', body:bodyObject, headers:{'Content-Type':'Application/json'}})
      .then(response=>response.json())
      .then(data=>{
        
        console.log(data)
        setData(data.successResponse.data.provider_response)





      })

}





  return (
    <div className={classes.root}>
    <Container>
 

    
        {true &&

          (<>
          
          { removeForm && data && (<>

              <p>
              Balance on your {data.account_number}:
              </p>
              <p>
              Available Account Balance: {data.available_balance}
              </p>


            </>)}   


        { !removeForm && (<>
          
          <Typography>
         open account
          </Typography>
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="Account Number" inputProps={ariaLabel} id='account_number'/>          
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="email" inputProps={ariaLabel} id='email'/> 
              <br/>                
              <Input style={{marginBottom:'5%'}} placeholder="Associated Phone Number" inputProps={ariaLabel} id='mobile_no'/>
             
              <br/>              

              <Button style={{marginBottom:'5%'}} variant="outlined" size='small'  id='getBalance' onClick={createAccount}>Get Balance</Button>

         

           
          </>)
        } 
                                   
                   </>)

      }

  </Container>

    </div>
  );
}
