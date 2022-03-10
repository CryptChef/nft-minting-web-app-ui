import {useStores} from "context/StoreComponent";
import {useState} from "react";

const AssetView = () => {
    const {mintStore} = useStores();
    const [assetURI] = useState("https://ipfs.io/ipfs/QmcyW2wp2XgN57YT1YXas8zNFYM6MnFg2zs4jpAxsSN5K5/1.png")
    return (
        <div>
            <h1>AssetView</h1>
            <img
                width={200}
                src={assetURI} alt="placeholder"/>

            <button onClick={() => mintStore.mint(assetURI)}>Mint</button>
        </div>
    )
}
export default AssetView