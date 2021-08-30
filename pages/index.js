import React from "react"
import Head from "next/head"
import Link from 'next/link'
import 'semantic-ui-css/semantic.min.css'
import { Image,Container,Message,Card,Button } from 'semantic-ui-react'
import vote from "../voteing"
import web3 from '../web3'

const Home=({registrationStatus,voteStatus})=>{
    return(
        <div style={{color: 'white',backgroundColor:'#3CB3FB',}}>
        <Container>
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Tourney:wght@100&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"/>
            </Head>
            <Image size='large' floated='right' style={{paddingTop:'15px'}} src='https://cdn.dribbble.com/users/1738394/screenshots/14505745/media/d75337c26e02c6b8bc39dcc3d7e87b38.png'  />
            <h1 style={{fontFamily:'Tourney',fontSize:"170px"}}>E-VOTE</h1>
            <h2 style={{fontFamily:'Abril Fatface',fontSize:"150px",letterSpacing:"10px"}}>2021</h2>
            {
                registrationStatus?<h3>Registration process state :- start</h3>:<h3>Registration process state :- stop</h3>
            }
            {
                voteStatus?<h3>Voting process state :- start</h3>:<h3>Voting process state :- stop</h3>
            }
            <Link href='/Admin/adminPage'>
            <Button size='huge' primary>Admin</Button>
            </Link>
            <Link href='/User/userPage'>
            <Button size='huge' style={{marginBottom:'24vh'}} primary>Voter</Button>
            </Link>
        </Container>
        
        </div>
    )
}

Home.getInitialProps=async()=>{
    //const accounts= await web3.eth.getAccounts();
    const registrationStatus=await vote.methods.registerStart().call();
    const voteStatus=await vote.methods.voteStart().call();
    return({registrationStatus:registrationStatus,voteStatus:voteStatus})
}

export default Home;