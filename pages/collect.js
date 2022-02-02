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


function makePayment(status){
      
       let firstname, surname, email, mobile_no, type, amount, account_number, pin, pan, cvv, expDate

       firstname = document.getElementById('firstname').value.toLowerCase()
       surname = document.getElementById('surname').value.toLowerCase()
       email = document.getElementById('email').value.toLowerCase()
       mobile_no = document.getElementById('mobile_no').value.toLowerCase()
       type = document.getElementById('type').value
       amount = document.getElementById('amount').value
       account_number = '348085356'
       pin = document.getElementById('pin').value
       pan = document.getElementById('pan').value
       cvv = document.getElementById('cvv').value
       expDate = document.getElementById('expDate').value

       
      if(!( type && amount && firstname && surname && email && mobile_no && cvv && pin && pan && expDate)) return alert('incomplete form')
        
        let bodyObject={
      
                        firstname, surname, email, mobile_no, type, amount, account_number, cvv , pin , pan , expDate
         
        }
           bodyObject = JSON.stringify(bodyObject)

           setRemoveForm(true)

       fetch(`${NEXT_ONEPIPE_BACKEND}/collect`,{method:'post', body:bodyObject, headers:{'Content-Type':'Application/json'}})
      .then(response=>response.json())
      .then(data=>{
        
        
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
                    Payment Status: 
              </p>

            </>)}   


        { !removeForm && (<>
          
          <Typography>
         pay bill via card
          </Typography>
              <br/>

              <Input style={{marginBottom:'5%'}} placeholder="pay with card" inputProps={ariaLabel} id='type'/>          
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="amount" inputProps={ariaLabel} id='amount'/>
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="firstname" inputProps={ariaLabel} id='firstname'/>          
              <br/>              
              <Input style={{marginBottom:'5%'}} placeholder="surname" inputProps={ariaLabel} id='surname'/>
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="email address" inputProps={ariaLabel} id='email'/>          
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="mobile number" inputProps={ariaLabel} id='mobile_no'/>          
              <br/>              
              <Input style={{marginBottom:'5%'}} placeholder="enter Card PAN" inputProps={ariaLabel} id='pan'/>
              <br/>              
              <Input style={{marginBottom:'5%'}} placeholder="enter Card pin" inputProps={ariaLabel} id='pin'/>
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="enter cvv" inputProps={ariaLabel} id='cvv'/>          
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="enter card expiry date" inputProps={ariaLabel} id='expDate'/>  
              <br/>
              <Button style={{marginBottom:'5%'}} variant="outlined" size='small'  id='pay' onClick={makePayment}>PAY</Button>

         

           
          </>)
        } 
                                   
                   </>)

      }

  </Container>

    </div>
  );
}
