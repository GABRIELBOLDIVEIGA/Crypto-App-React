import { createContext, useContext, useState, useEffect } from "react";

export const MoedasAPIContext = createContext();
MoedasAPIContext.displayName = "MoedasAPIContext";

export default function MoedasAPIProvider({ children }) {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=USD")
            .then((resp) => resp.json())
            .then((dados) => {
                setCoins(dados.coins);
                // console.log(dados.coins);
            });
    }, []);

    return <MoedasAPIContext.Provider value={{ coins }}>{children}</MoedasAPIContext.Provider>;
}

export function useMoedasAPIContext() {
    const { coins } = useContext(MoedasAPIContext);

    return {
        coins,
    };
}
