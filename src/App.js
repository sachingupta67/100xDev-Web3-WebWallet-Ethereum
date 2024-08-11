import { ethers } from "ethers";
import { useState } from "react";

const App = () => {
  const [mnemonic, setMnemonic] = useState("");
  const [wallets, setWallet] = useState([]);

  const generateMnemonic = async () => {
    const randomMnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    setMnemonic(randomMnemonic);
  };

  const addWallet = async () => {
    if (mnemonic) {
      const wallet = ethers.Wallet.fromPhrase(mnemonic);
      setWallet((prev)=>[...prev, wallet]);
      setMnemonic(()=>"");

    }
  };
  return (
    <div>
      <h1>Web Wallet | Ethereum</h1>
      <button onClick={generateMnemonic}>
        {mnemonic ? "Generate Other Mnemonic" : "Generate Mnemonic"}
      </button>
      {mnemonic && <p>Mnemonic: {mnemonic}</p>}
      <button onClick={addWallet} disabled={!mnemonic}>
        Add Wallet 
      </button>
      <h2>Wallets</h2>
      <ul>
        {wallets.map((wallet, index) => (
          <li key={index}>
            <p>Address: {wallet.address}</p>
            <p>Public Key: {wallet.publicKey}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
