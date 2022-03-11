import RootStore from "./RootStore";
import NFTMinterAbi from 'contracts/NFTMinter.json'
import {action, makeAutoObservable} from "mobx";
import AccountStore from "./AccountStore";
import {ethers} from "ethers";

export default class MintStore {

    accountStore: AccountStore

    contractAddress: string

    constructor(public rootStore: RootStore) {
        const {accountStore} = rootStore;
        this.accountStore = accountStore;
        this.contractAddress = `${import.meta.env.VITE_CONTRACT_ADDRESS}`;
        makeAutoObservable(this);
    }

    @action
    async mint(assetId: string) {
        console.log(`Minting ${assetId}`);
        console.log(`Contract address: ${this.contractAddress}`);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(this.contractAddress, NFTMinterAbi.abi, signer);
        try {
            const tx = await contract.mintNFT(this.accountStore.account, assetId);
            console.log("response from contract", tx);
        } catch (e) {
            console.log(e);
        }
    }
}