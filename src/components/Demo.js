import { ConnectButton } from "@mysten/dapp-kit";
import { ConnectedAccount } from "./Content";

const Demo = () => {
  return (
    <>
      <nav>
        <div className="nav__brand">
          <h1>Interaction with DApp-kit</h1>
          <ConnectButton connectText="Connect Wallet" />
        </div>
      </nav>
      <ConnectedAccount />
    </>
  );
};

export default Demo;
