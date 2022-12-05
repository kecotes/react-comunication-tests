import { useContext } from "react";
import { createContext } from "react";

export const KevContextProvider = ({ children }) => {
	const [kevContextValue, setKevContextValue] = useState("");

	return (
		<KevContext.Provider value={{ kevContextValue, setKevContextValue }}>
			{children}
		</KevContext.Provider>
	);
};

export const useKevContext = () => {
	const context = useContext(KevContext);
	if (context === undefined) {
		throw new Error("Este componente no está dentro del provider");
	}
	return context;
};
