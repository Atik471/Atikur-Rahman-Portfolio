import PropTypes from "prop-types";
import { createContext } from "react";

export const ServerContext = createContext()

const ServerProvider = ({ children }) => {

    const serverDomain = "http://localhost:5000"
    // const serverDomain = "https://service-trek-server.vercel.app"
    return (
        <ServerContext.Provider value={serverDomain}>
            {children}
        </ServerContext.Provider>
    );
};

ServerProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default ServerProvider;