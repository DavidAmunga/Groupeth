import web3 from './web3';
import CampaignFactory from  './build/CampaignFactory.json';

const instance=new web3.eth.Contract
(JSON.parse(CampaignFactory.interface),'0xdd07c2E6866f7b8a18ee3CC33C4719415B066f6E');

export default instance;
