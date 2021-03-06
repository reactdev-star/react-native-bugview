import * as React from "react";

export type TBugVIewContext = {
    addParam: (opt: Record<string, any>) => void,
    navigationEvent: (screen: string, params?: any) => void,
    createLogFile: () => Promise<string>,
    bugviewVersion: string
}
//@ts-ignore
export default React.createContext<TBugVIewContext>({})