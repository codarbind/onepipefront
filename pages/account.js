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
      
       let firstname, surname, email, mobile_no, name_on_account, dob, gender, title, address_line_1, address_line_2, city, state, country

       firstname = document.getElementById('firstname').value.toLowerCase()
       surname = document.getElementById('surname').value.toLowerCase()
       email = document.getElementById('email').value.toLowerCase()
       mobile_no = document.getElementById('mobile_no').value.toLowerCase()
       name_on_account = `${surname} ${firstname}`
       dob = document.getElementById('dob').value.toLowerCase()
       gender = document.getElementById('gender').value.toLowerCase()
       address_line_1 = document.getElementById('address_line_1').value
       address_line_2 = document.getElementById('address_line_2').value
       city = document.getElementById('city').value.toLowerCase()
       state = document.getElementById('state').value.toLowerCase()
       country = document.getElementById('country').value.toLowerCase()
       title = document.getElementById('title').value.toLowerCase()


      if(!( firstname && surname && email && mobile_no && name_on_account && dob && gender && title && address_line_1 && city && state && country )) return alert('incomplete form')
        
        let bodyObject={
      
                        firstname, surname, email, mobile_no, name_on_account, dob, gender, title, address_line_1, address_line_2, city, state, country
         
        }
           bodyObject = JSON.stringify(bodyObject)

           setRemoveForm(true)

       fetch(`${NEXT_ONEPIPE_BACKEND}/account`,{method:'post', body:bodyObject, headers:{'Content-Type':'Application/json'}})
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
              Details of your new account:
              </p>
              <p>
              Account Name: {data.account_name}
              </p>
              <p>
              Account Number: {data.account_number}
              </p>
              <p>
              Name of Bank: {data.bank_name}
              </p>

            </>)}   


        { !removeForm && (<>
          
          <Typography>
         open account
          </Typography>
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="Title" inputProps={ariaLabel} id='title'/>          
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="firstname" inputProps={ariaLabel} id='firstname'/>          
              <br/>              
              <Input style={{marginBottom:'5%'}} placeholder="surname" inputProps={ariaLabel} id='surname'/>
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="email address" inputProps={ariaLabel} id='email'/>          
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="mobile number" inputProps={ariaLabel} id='mobile_no'/>          
              <br/>              
              <Input style={{marginBottom:'5%'}} placeholder="Date of Birth" inputProps={ariaLabel} id='dob'/>
              <Input style={{marginBottom:'5%'}} placeholder="gender" inputProps={ariaLabel} id='gender'/>          
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="city" inputProps={ariaLabel} id='city'/>          
              <br/>              
              <Input style={{marginBottom:'5%'}} placeholder="state" inputProps={ariaLabel} id='state'/>
              <Input style={{marginBottom:'5%'}} placeholder="Country" inputProps={ariaLabel} id='country'/>          
              <br/>
              <Input style={{marginBottom:'5%'}} placeholder="address line 1" inputProps={ariaLabel} id='address_line_1'/>          
              <br/>              
              <Input style={{marginBottom:'5%'}} placeholder="address_line_2" inputProps={ariaLabel} id='address_line_2'/>
              <br/>              
              <br/>              
              <br/>              

              <Button style={{marginBottom:'5%'}} variant="outlined" size='small'  id='createAccount' onClick={createAccount}>CREATE ACCOUNT</Button>

         

           
          </>)
        } 
                                   
                   </>)

      }

  </Container>

    </div>
  );
}
