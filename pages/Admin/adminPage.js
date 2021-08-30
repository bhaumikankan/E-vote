import  React from 'react'
import web3 from '../../web3'
import vote from '../../voteing'
import 'semantic-ui-css/semantic.min.css'
import { Image,Container,Message,Card,Button,Grid,Table,GridColumn,Form,GridRow } from 'semantic-ui-react'
import { Router, useRouter } from 'next/router'
import voteing from '../../voteing'
import Link from 'next/link'

const Admin=({allcandidates,registrationStatus,voteStatus,allApplicants,totalApprovers})=>{

    const router=useRouter();
    const[name,setName]=React.useState('');
    const[partyName,setPartyName]=React.useState('');
    const[load,setLoad]=React.useState(false);
    const[rload,setRload]=React.useState(false);
    const[vload,setVload]=React.useState(false);
    const[error,setError]=React.useState(false);
    const[aload,setAload]=React.useState(false);
    
    const handelSubmit=async(e)=>{
           e.preventDefault();
           setLoad(true);
           const account=await web3.eth.getAccounts();
           await vote.methods.addCandidate(name,partyName).send({
               from:account[0]
           })
           setLoad(false);
           setName('');
           setPartyName('');
           router.push('/Admin/adminPage')
    }
   
    const handelStartRegistration=async()=>{
        setRload(true)
        const account=await web3.eth.getAccounts();
        await voteing.methods.startRegistration().send({
            from:account[0]
         })
         setRload(false);
         router.push('/Admin/adminPage')
    }

    const handelStartvote=async()=>{
        setVload(true)
        const account=await web3.eth.getAccounts();
        await voteing.methods.startVoteing().send({
            from:account[0]
         })
         setVload(false);
         router.push('/Admin/adminPage')
    }

    const hadelStopRegistration=async()=>{
        setRload(true);
        const account=await web3.eth.getAccounts();
        await voteing.methods.stopRegistration().send({
            from:account[0]
         })
         setRload(false);
         router.push('/Admin/adminPage')
    }

    const hadelStopVote=async()=>{
        setVload(true);
        const account=await web3.eth.getAccounts();
        await voteing.methods.stopVoteing().send({
            from:account[0]
         })
         setVload(false);
         router.push('/Admin/adminPage')
    }

   const approve=async(index)=>{
        setAload(true)
        const account=await web3.eth.getAccounts();
        await voteing.methods.approveApplication(index).send({
            from:account[0]
        })
        setAload(false);
        router.push('/Admin/adminPage')
    }

    return(
        <div style={{color: 'white',backgroundColor:'#3CB3FB'}}>
        <Container>
            <center style={{paddingTop:'20px'}}><h1>Admin</h1></center>
            <Link href="/">
                <Button primary>Back to HOME</Button>
            </Link>
            {
                registrationStatus?<Button color={'red'} loading={rload} onClick={hadelStopRegistration} size='large' style={{marginTop:'80px'}}>Stop Registration</Button>:<Button loading={rload} onClick={handelStartRegistration} style={{marginTop:'80px'}} positive size='large'>start Registration</Button>
            }
            {
                voteStatus?<Button size='large' color={'red'} loading={vload} onClick={hadelStopVote}>Stop Voting</Button>:<Button style={{marginTop:'80px'}} positive size='large' loading={vload} onClick={handelStartvote}>start voting</Button>
            }
            <Grid style={{paddingTop:'50px'}}>
                <GridRow>
                    <GridColumn width={8}>
                        <h1><center>Add Candidate</center></h1>
                       <Form onSubmit={handelSubmit}>
                         <Form.Input label='Name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter candidate name' />
                         <Form.Input label='Party name' value={partyName} onChange={(e)=>setPartyName(e.target.value)} placeholder='Enter party name' />
                         <Button primary loading={load} >Submit</Button>
                       </Form>
                    </GridColumn>
                    <GridColumn  width={8}>
                        <center><h1>Vote Result</h1></center>
                           <Table celled>
                            <Table.Header>
                            <Table.Row>
                            <Table.HeaderCell>Candidate Name</Table.HeaderCell>
                            <Table.HeaderCell>Party Name</Table.HeaderCell>
                            <Table.HeaderCell>Vote Count</Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {allcandidates.map((candidate,index)=>{
                                   return <Table.Row key={index}>
                                       <Table.Cell>{candidate[0]}</Table.Cell>
                                       <Table.Cell>{candidate[1]}</Table.Cell>
                                       <Table.Cell>{candidate[2]}</Table.Cell>
                                   </Table.Row>
                                })
                                }
                            </Table.Body>
                            </Table>
                    </GridColumn>
                </GridRow>
            </Grid>
            <h2>Applications</h2>
            <h3>Total approve voter = {totalApprovers}</h3>
            <Table celled style={{paddingBottom:'90px'}}>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Voter Card Number</Table.HeaderCell>
                <Table.HeaderCell>Adhar Card Number</Table.HeaderCell>
                <Table.HeaderCell>Address</Table.HeaderCell>
                <Table.HeaderCell>Approve</Table.HeaderCell>
                </Table.Row>
            </Table.Header>    
                <Table.Body>
                {allApplicants.map((application,index)=>{
                                   return <Table.Row key={index} disabled={application[3]}>
                                       <Table.Cell>{application[0]}</Table.Cell>
                                       <Table.Cell>{application[1]}</Table.Cell>
                                       <Table.Cell>{application[2]}</Table.Cell>
                                       <Table.Cell><Button loading={aload} disabled={application[3]} onClick={()=>approve(index)}  positive>Approve</Button></Table.Cell>
                                   </Table.Row>
                                })
                                }
                </Table.Body>
            </Table>
        </Container>
        </div>
    )
}

Admin.getInitialProps=async()=>{
    const allcandidates=await vote.methods.getAllcandidates().call();
    const registrationStatus=await vote.methods.registerStart().call();
    const voteStatus=await vote.methods.voteStart().call();
    const allApplicants=await vote.methods.getAllapplications().call();
    const totalApprovers=await vote.methods.totalApprovers().call();
    console.log(totalApprovers);
    return({allcandidates: allcandidates,registrationStatus: registrationStatus,voteStatus: voteStatus,allApplicants: allApplicants,totalApprovers: totalApprovers})
}

export default Admin