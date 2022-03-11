import CalcStore from "./CalcStore";
import {makeAutoObservable} from "mobx";
import MintStore from "./MintStore";
import AccountStore from "./AccountStore";

class RootStore {

    calcStore: CalcStore;
    mintStore: MintStore;
    accountStore: AccountStore;

    constructor() {
        this.accountStore = new AccountStore(this);
        this.calcStore = new CalcStore(this);
        this.mintStore = new MintStore(this);
        makeAutoObservable(this);
    }

}

export default RootStore;