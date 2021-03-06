var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react-native-device-info", "react-native"], function (require, exports, react_native_device_info_1, react_native_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_native_device_info_1 = __importDefault(react_native_device_info_1);
    var _a = react_native_1.Dimensions.get("screen"), width = _a.width, height = _a.height;
    var staticInfo = {};
    var Device = /** @class */ (function () {
        function Device() {
        }
        Device.getStaticInfo = function () {
            try {
                staticInfo = {
                    screenSize: { width: width, height: height },
                    platform: react_native_1.Platform.OS,
                    systemVersion: react_native_device_info_1.default.getSystemVersion(),
                    nativeVersion: react_native_device_info_1.default.getVersion(),
                    apiLevel: react_native_device_info_1.default.getApiLevelSync(),
                    appName: react_native_device_info_1.default.getApplicationName(),
                    brand: react_native_device_info_1.default.getBrand(),
                    buildNumber: react_native_device_info_1.default.getBuildNumber(),
                    bundleId: react_native_device_info_1.default.getBundleId(),
                    operator: react_native_device_info_1.default.getCarrierSync(),
                    deviceId: react_native_device_info_1.default.getDeviceId(),
                    isTablet: react_native_device_info_1.default.isTablet(),
                    // deviceCountry: DeviceInfo.getDe,
                    ip: react_native_device_info_1.default.getIpAddressSync(),
                    uniqueDeviceId: react_native_device_info_1.default.getUniqueId(),
                    pixelRatio: react_native_1.PixelRatio.get()
                };
                return staticInfo;
            }
            catch (e) {
                console.warn(e);
                return {};
            }
        };
        Device.getInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, e_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 4, , 5]);
                            _a = [__assign({}, Device.getStaticInfo())];
                            _b = {};
                            return [4 /*yield*/, react_native_device_info_1.default.getBatteryLevel()];
                        case 1:
                            _b.battaryLevel = _c.sent();
                            return [4 /*yield*/, react_native_device_info_1.default.isLocationEnabled()];
                        case 2:
                            _b.locationEnabled = _c.sent();
                            return [4 /*yield*/, react_native_device_info_1.default.getFreeDiskStorage()];
                        case 3: 
                        // const { tracker } = redux.getStore()
                        return [2 /*return*/, __assign.apply(void 0, _a.concat([(_b.freeDiskStorage = _c.sent(), _b)]))];
                        case 4:
                            e_1 = _c.sent();
                            console.warn(e_1);
                            return [2 /*return*/, {}];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        return Device;
    }());
    exports.default = Device;
});
