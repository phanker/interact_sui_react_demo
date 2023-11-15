import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit";

export function ConnectedAccount() {
  const account = useCurrentAccount();
  if (!account) {
    return null;
  }

  return (
    <div>
      <div>Connected to {account.address}</div>
      <OwnedObjects address={account.address} />
    </div>
  );
}

function OwnedObjects({ address }) {
  const { data } = useSuiClientQuery("getOwnedObjects", {
    owner: address,
  });
  console.log({ data });
  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.data.map((object) => (
        <li key={object.data?.objectId}>
          <a href={`https://suiexplorer.com/object/${object.data?.objectId}`}>
            {object.data?.objectId}
          </a>
        </li>
      ))}
    </ul>
  );
}
