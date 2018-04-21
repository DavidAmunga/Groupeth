import React,{Component} from 'react';
import {Header,Form,Button,Input,Message,Icon} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Link,Router} from '../../routes';

class CampaignNew extends Component{
    state={
        minimumContribution:'',
        errorMessage: '',
        loading:false,
        color:'green'
    };
    onSubmit=async(event)=>{
        event.preventDefault();

        this.setState({loading:true,errorMessage:'',color:'blue'});

        try {
            const accounts=await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minimumContribution)
                .send({
                    from:accounts[0]
                });
            Router.pushRoute('/');    
        } catch (error) {
            if(error.message.includes("User denied transaction signature"))
            {
                this.setState({errorMessage:'User has rejected the transaction' });
            }
            else if(error.message.includes("address specified in neither the given options, nor the default options.")){
                this.setState({errorMessage:"Please log in to Metamask on your browser"}); 
            }
            else
            {
                this.setState({errorMessage:error.message}); 
            }
             
        }

      this.setState({loading:false,color:'green'});

    };

    render(){
        return (
            <Layout>
            <Header as='h2' icon textAlign='center'>
                    <Icon name='users' />
                   Create a Campaign
                   
             </Header>
             <Message info
             attached
             header='Enter a minimum contribution'
             content='All approvers should contribute more than this amount'
             />
            <Form className="attached fluid segment" onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
                   
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button animated color={this.state.color}  loading={this.state.loading} >
            <Button.Content visible>Create!</Button.Content>
                 <Button.Content hidden>
                 <Icon name='add' />
            </Button.Content>
           
          </Button>
        </Form>

            </Layout>
        )
    }
}


export default CampaignNew;