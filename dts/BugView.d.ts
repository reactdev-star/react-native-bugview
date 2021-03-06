import * as React from "react";
import { TDeviceInfo } from "./Device";
import { TError } from "./types";
declare type Props = {
    appVersion?: string;
    onCrashReport: (uri: string) => Promise<void>;
    onSaveReport?: () => void;
    renderErrorScreen?: (props: {
        error: TError;
        savingReport: boolean;
        restartApp: () => void;
    }) => React.ReactNode;
    disableRecordScreen?: boolean;
    devMode?: boolean;
    recordTime?: number;
};
declare type State = {
    error: TError | undefined;
    enabled: boolean;
    savingReport: boolean;
};
declare type EventType = 'image' | 'request' | 'response' | 'touch' | 'navigate';
declare type Event = {
    time: number;
    type: EventType;
    data: any;
};
declare class BugView extends React.PureComponent<Props, State> {
    timeline: Event[];
    state: State;
    additionalParams: Record<string, any>;
    deviceInfo: TDeviceInfo;
    constructor(props: Props);
    componentDidMount(): void;
    initNetworkLogger: () => void;
    sendLog: () => Promise<void>;
    getTimeline: () => Promise<any[]>;
    createLogFile: () => Promise<string>;
    createReportFile: (error: TError) => Promise<string>;
    createReport: (error: TError) => void;
    nativeErrorHandler: (error: string) => Promise<void>;
    jsErrorHandler: (error: Error, isFatal: boolean) => Promise<void>;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    addEvent: (type: EventType) => (data: any) => void;
    trackTouches: (eventType: "start" | "move" | "end") => (e: any) => void;
    get recordTime(): number;
    render(): {} | null | undefined;
}
export default BugView;
