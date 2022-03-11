import {observer} from "mobx-react-lite";
import {useStores} from "context/StoreComponent";

const Account = () => {
    const {accountStore} = useStores();
    return (
        <div>
            <h1>Account</h1>
            {accountStore.account && <> Joined = <span>{accountStore.account}</span></>}
            {!accountStore.account && <>
                <button onClick={async () => {
                    await accountStore.join()
                }} className={"px-4 py-2 bg-slate-800 rounded text-white"}>Join
                </button>
            </>}
        </div>
    )
}
export default observer(Account);