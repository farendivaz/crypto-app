import { useEffect, useState } from "react";
import Coin from "./components/Coin";
import styled from "styled-components";

function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCryptoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCryptoData = async () => {
    const res = await fetch("https://api.coinstats.app/public/v1/coins?skip=0");
    const data = await res.json();
    setCrypto(data.coins);
  };

  const filteredCoins = crypto.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <Search>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            icon={coin.icon}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.price}
            priceChange={coin.priceChange1w}
            marketCap={coin.marketCap}
            mykey={coin.id}
            key={coin.id}
          />
        );
      })}
    </div>
  );
}
const Search = styled.section`
  width: 100%;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 20%;
    padding: 0.5rem;
  }
`;
export default App;
