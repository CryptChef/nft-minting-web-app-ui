import RootStore from "./RootStore";
import {action, makeAutoObservable} from "mobx";

export default class MintStore {
    constructor(public rootStore: RootStore) {
        makeAutoObservable(this);
    }
    @action
    mint(assetId: string) {
        console.log("Minting", assetId);
    }
}