import React from "react";
import { AppContext } from "./context";

export default (Component) => {
    return props => {
        return (
            <AppContext.Consumer>
                {context => <Component  {...props} context={context} />}
            </AppContext.Consumer>
        );
    };
};