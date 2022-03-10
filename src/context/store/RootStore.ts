import CalcStore from "./CalcStore";
import {makeAutoObservable} from "mobx";
import MintStore from "./MintStore";

class RootStore {

    calcStore: CalcStore;
    mintStore: MintStore;

    constructor() {
        this.calcStore = new CalcStore(this);
        this.mintStore = new MintStore(this);
        makeAutoObservable(this);
    }

}

export default RootStore;