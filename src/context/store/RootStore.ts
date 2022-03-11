import CalcStore from "./CalcStore";
import {makeAutoObservable} from "mobx";
import MintStore from "./MintStore";
import AccountStore from "./AccountStore";

class RootStore {

    calcStore: CalcStore;
    mintStore: MintStore;
    accountStore: AccountStore;

    constructor() {
        this.calcStore = new CalcStore(this);
        this.mintStore = new MintStore(this);
        this.accountStore = new AccountStore(this);
        makeAutoObservable(this);
    }

}

export default RootStore;