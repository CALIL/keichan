"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var Speech = /** @class */ (function (_super) {
    __extends(Speech, _super);
    function Speech(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRecognition: false
        };
        return _this;
    }
    Speech.prototype.start = function () {
        var _this = this;
        var LANG_JAPAN = "ja-JP";
        var recognition = new webkitSpeechRecognition();
        recognition.lang = LANG_JAPAN;
        this.setState({ isRecognition: true });
        recognition.onend = function () {
            console.log('on end');
            recognition.stop();
            _this.setState({ isRecognition: false });
        };
        recognition.onresult = function (e) {
            if (e.results.length > 0) {
                _this.props.onEnd(e.results[0][0].transcript);
                // this.setState({results: [e.results[0][0].transcript].concat(this.state.results)});
            }
        };
        recognition.onstart = function () { console.log('on start'); };
        recognition.onspeechstart = function () { console.log('on speech start'); };
        recognition.onspeechend = function () { console.log('on speech end'); };
        recognition.onosundstart = function () { console.log('on sound start'); };
        recognition.onsoundend = function () { console.log('on sound end'); };
        recognition.onaudiostart = function () { console.log('on audio start'); };
        recognition.onaudioend = function () { console.log('on audio end'); };
        recognition.start();
    };
    Speech.prototype.render = function () {
        if ('webkitSpeechRecognition' in window) {
            // ユーザのブラウザは音声合成に対応しています。
            return (<span className="speech" onClick={this.start.bind(this)}>
                    {this.state.isRecognition ? ('認識中…') : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"/></svg>)}
                </span>);
        }
        else {
            // ユーザのブラウザは音声合成に対応していません。
            return null;
        }
    };
    return Speech;
}(react_1.Component));
exports["default"] = Speech;
