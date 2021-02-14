"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = exports.addOne = void 0;
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const addOne = (input) => input + 1;
exports.addOne = addOne;
const Counter = () => {
    const [count, setCount] = React.useState(0);
    return (<react_native_1.View style={styles.container}>
      <react_native_1.Text>You pressed {count} times</react_native_1.Text>
      <react_native_1.Button onPress={() => setCount(exports.addOne(count))} title='Press Me'/>
    </react_native_1.View>);
};
exports.Counter = Counter;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },
});
exports.default = react_native_1.NativeModules.RNModuleTemplate;
//# sourceMappingURL=index.js.map