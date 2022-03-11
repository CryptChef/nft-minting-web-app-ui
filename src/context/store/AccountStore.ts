import RootStore from "./RootStore";
import {action, makeAutoObservable, observable} from "mobx";

export default class AccountStore {
    @observable
    account: any;

    constructor(private rootStore: RootStore) {
        makeAutoObservable(this);
    }

    @action
    async join() {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });
        if (accounts.length > 0) {
            this.account = accounts[0]
        }
    }
}