import  React from 'react'
import web3 from '../../web3'
import vote from '../../voteing'
import 'semantic-ui-css/semantic.min.css'
import Link from 'next/link'
import { Image,Container,Message,Card,Button,Grid, GridRow, GridColumn, Divider,Form,Table } from 'semantic-ui-react'

const User=({registrationStatus,voteStatus,allcandidates})=>{
    const [load,setLoad]=React.useState(false);
    const [error,setError]=React.useState(false);
    const [success,setSuccess]=React.useState(false);
    const [votercardNum,setVotercardNum]=React.useState('')
    const [adharcardNum,setadharcardNum]=React.useState('')
    const [walletaddress,setAddress]=React.useState('')
    const [vload,setVload]=React.useState(false);
    const [verror,setVerror]=React.useState(false)
    const [vsuccess,setVSuccess]=React.useState(false)

    const handelSubmit=async(e)=>{
        e.preventDefault();
        setLoad(true);
        setError(false);
        setSuccess(false);
        try{
        const account=await web3.eth.getAccounts();
        await vote.methods.Register(votercardNum,adharcardNum,walletaddress).send({
            from: account[0],
        })
        setLoad(false);
        setSuccess('Your registration submitted for review ');
        setVotercardNum('')
        setadharcardNum('')
        setAddress('')
    }catch(err){
        setError(err.message);
        setLoad(false);
    }

    }

    const voteFun= async(index)=>{
        setVload(true);
        setVerror(false);
        setVSuccess(false);
        try{
        const account=await web3.eth.getAccounts();
        await vote.methods.vote(index).send({
            from: account[0],
        })
        setVload(false);
        setVSuccess('Your vote is complete');
        
    }catch(err){
        setVload(false);
        setVerror(err.message);
    }
    }

    return(
        <div style={{color: 'white',backgroundColor:'#3CB3FB',height:'100vh'}}>
        <Container>
        <center style={{paddingTop:'20px'}}><h1>Voting Page</h1></center>
        <Link href="/">
                <Button style={{marginTop:'80px'}} primary>Back to HOME</Button>
            </Link>
            <Grid style={{paddingTop:'50px'}}>
                <GridRow>
                    <GridColumn width={8}>
                        <h1><center>Registration</center></h1>
                       {!registrationStatus? <Message negative>
                         <Message.Header>Registration status: stop</Message.Header>
                         <p>registration will start from 10a.m.</p>
                         </Message>:<Form onSubmit={handelSubmit} error={error} success={success}>
                         <Form.Input label='Voter Card Number' placeholder='Enter voter card number' value={votercardNum} onChange={(e)=>setVotercardNum(e.target.value)} />
                         <Form.Input label='Adhar Card Number' placeholder='Enter adhar card number' value={adharcardNum} onChange={(e)=>setadharcardNum(e.target.value)} />
                         <Form.Input label='Valid wallet address' placeholder='Enter valid wallet address' value={walletaddress} onChange={(e)=>setAddress(e.target.value)} />
                         <Button loading={load} primary>Submit</Button>
                         <Message error>
                        <Message.Header>Opps!!</Message.Header>
                        <p>{error}</p>
                        </Message>
                        <Message success>
                        <Message.Header>Success!!</Message.Header>
                        <p>{success}</p>
                        </Message>
                       </Form>}
                    </GridColumn>
                    <GridColumn  width={8}>
                        <center><h1>Vote</h1></center>
                        {
                            !voteStatus?<Message negative>
                            <Message.Header>Voting status: stop</Message.Header>
                            <p>voting will start after registration</p>
                            </Message>:<div>
                            {
                                 verror&&<Message negative>
                                 <Message.Header>Opps!!</Message.Header>
                                 <p>{verror}</p>
                                 </Message>
                            }  
                            {   
                                 vsuccess&&<Message success>
                                 <Message.Header>Success!!</Message.Header>
                                 <p>{vsuccess}</p>
                                 </Message>

                             }    
                            <Table celled>

                            <Table.Header>
                            <Table.Row>
                            <Table.HeaderCell>Candidate Name</Table.HeaderCell>
                            <Table.HeaderCell>Party Name</Table.HeaderCell>
                            <Table.HeaderCell>Vote</Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>

                            <Table.Body>
                             {
                                 allcandidates.map((candidate,index) =>{
                                    return <Table.Row key={index}>
                                    <Table.Cell>{candidate[0]}</Table.Cell>
                                    <Table.Cell>{candidate[1]}</Table.Cell>
                                    <Table.Cell><Button loading={vload} positive onClick={()=>voteFun(index)}>Vote</Button></Table.Cell>
                                </Table.Row>
                                 })
                             }
                            </Table.Body>

                            </Table>
                            </div>
                        }
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
        </div>
    )
}

User.getInitialProps=async()=>{
    const registrationStatus=await vote.methods.registerStart().call();
    const voteStatus=await vote.methods.voteStart().call();
    const allcandidates=await vote.methods.getAllcandidates().call();
    return({registrationStatus:registrationStatus,voteStatus:voteStatus,allcandidates:allcandidates})
}

export default User;