/* empty css                */import { R as React, m as main$1, a as ReactDOM } from "./vendor.01094ba0.js";
var main = `.rce-mbox-video {
    margin-top: -3px;
    margin-right: -6px;
    margin-left: -6px;
}

.rce-mbox-video.padding-time {
    padding-bottom: 12px;
}

.rce-mbox-video .rce-mbox-text {
    padding: 5px 0px;
    max-width: 300px;
    margin: auto;
}

.rce-mbox-video--video {
    position: relative;
    display: flex;
    overflow: hidden;
    justify-content: center;
    border-radius: 5px;
    max-height: 500px;
}

.rce-mbox-video--video__block {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    border-radius: 5px;
    display: flex;
}

.rce-mbox-video--video img {
    height: 100%;
    min-height: 100px;
    user-select: none;
}

.rce-mbox-video--video video {
    width: 100%;
    /*min-height: 100px;*/
    user-select: none;
}

.rce-mbox-video--video__block-item {
    margin: auto;
    cursor: pointer;
    width: 100px;
    height: 100px;
}

.rce-mbox-video--download {
    color: #efe;
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    font-size: 3.2em;
    outline: none;
    border: 1px solid #eee;
    border-radius: 100%;
    height: 100px;
    width: 100px;
}

.rce-mbox-video--download:hover {
    opacity: .7;
}

.rce-mbox-video--download:active {
    opacity: .3;
}

.rce-mbox-video--error {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    font-size: 70px;
    color: #eaeaea;
}
.rce-container-mbox {
    flex-direction: column;
    display: block;
    overflow-x: hidden;
    min-width: 300px;
}

.rce-mbox-forward {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background: #fff;
    position: absolute;
    /*display: none;*/
    flex-direction: row;
    align-self: center;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px 0 rgba(164, 164, 164, 1);
    cursor: pointer;
    transition: all 0.3s ease;
    top: 0;
    bottom: 0;
    margin: auto;
}

.rce-mbox-forward-left {
    display: flex;
    opacity: 0;
    visibility: hidden;
    left: -50px;
}

.rce-mbox-forward-right {
    display: flex;
    opacity: 0;
    visibility: hidden;
    right: -50px;
}

.rce-mbox-reply-btn-left {
    display: flex;
    opacity: 0;
    visibility: hidden;
    left: -85px;
}

.rce-mbox-reply-btn-right {
    display: flex;
    opacity: 0;
    visibility: hidden;
    right: -85px;
}

.rce-container-mbox:hover .rce-mbox-forward-left {
    opacity: 1;
    visibility: visible;
}

.rce-container-mbox:hover .rce-mbox-forward-right {
    opacity: 1;
    visibility: visible;
}

.rce-mbox-remove {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background: #fff;
    position: absolute;
    /*display: none;*/
    flex-direction: row;
    align-self: center;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px 0 rgba(164, 164, 164, 1);
    cursor: pointer;
    transition: all 0.3s ease;
    top: 0;
    bottom: 0;
    margin: auto;
}

.rce-mbox-remove-left {
    display: flex;
    opacity: 0;
    visibility: hidden;
    left: -120px;
}

.rce-mbox-remove-right {
    display: flex;
    opacity: 0;
    visibility: hidden;
    right: -120px;
}

.rce-container-mbox:hover .rce-mbox-remove-left {
    opacity: 1;
    visibility: visible;
}

.rce-container-mbox:hover .rce-mbox-remove-right {
    opacity: 1;
    visibility: visible;
}

.rce-container-mbox:hover .rce-mbox-reply-btn-left {
    opacity: 1;
    visibility: visible;
}

.rce-container-mbox:hover .rce-mbox-reply-btn-right {
    opacity: 1;
    visibility: visible;
}

.rce-mbox {
    position: relative;
    background: white;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .2);
    border-top-left-radius: 0px;
    margin-left: 20px;
    margin-right: 5px;
    margin-top: 3px;
    flex-direction: column;
    margin-bottom: 3px;
    padding: 6px 9px 8px 9px;
    float: left;
    min-width: 140px;
}

.rce-mbox.message-focus {
    animation-iteration-count: 2;
    -webkit-animation-iteration-count: 2;
    -webkit-animation-duration: 1s;
    animation-name: message-box-default-focus;
    animation-duration: 1s;
}

@-webkit-keyframes message-box-default-focus {
    from {background-color: #fff;}
    to {background-color: #dfdfdf;}
}

.rce-mbox-body {
    margin: 0;
    padding: 0;
    position: relative;
}

.rce-mbox.rce-mbox-right {
    float: right;
    margin-left: 5px;
    margin-right: 20px;
    border-top-right-radius: 0px;
    border-top-left-radius: 5px;
}

.rce-mbox.rce-mbox-right.message-focus {
    animation-iteration-count: 2;
    -webkit-animation-iteration-count: 2;
    -webkit-animation-duration: 1s;
    animation-name: message-box-right-focus;
    animation-duration: 1s;
}

@-webkit-keyframes message-box-right-focus {
    from {background-color: #d4f1fb;}
    to {background-color: #b8dae6;}
}

.rce-mbox-text {
    font-size: 13.6px;
    word-break: break-word;
}

.rce-mbox-text-retracted {
    font-style: italic;
    user-select: none;
    display: flex;
    align-items: center;
}

.rce-mbox-text.rce-mbox-text-retracted svg {
    margin-right: 3px;
}

.rce-mbox-text-retracted.left {
    color: #555555b3 !important;
}

.rce-mbox-text-retracted.right {
    color: #efefefb3 !important;
}

.rce-mbox-text:after {
    content: "\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0\\A0"
}

.rce-mbox-time {
    text-align: right;
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
    position: absolute;
    right: -4px;
    bottom: -5px;
}

.rce-mbox-time.non-copiable:before {
    content: attr(data-text);
}

.rce-mbox-time-block {
    /*position: relative;*/
    right: 0;
    bottom: 0;
    left: 0;
    margin-right: -6px;
    margin-left: -6px;
    padding-top: 5px;
    padding-right: 3px;
    padding-bottom: 2px;
    background: linear-gradient(to top, rgba(0,0,0,0.33), transparent);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #fff;
}

.rce-mbox--clear-padding {
    padding-bottom: 3px;
}

.rce-mbox.rce-mbox--clear-notch {
    border-radius: 5px 5px 5px 5px !important;
}

.rce-mbox-right-notch {
    position: absolute;
    right: -14px;
    top: 0px;
    width: 15px;
    height: 15px;
    fill: white;
    filter: drop-shadow( 2px 0px 1px rgba(0, 0, 0, .2));
}

.rce-mbox-right-notch.message-focus {
    animation-iteration-count: 2;
    -webkit-animation-iteration-count: 2;
    -webkit-animation-duration: 1s;
    animation-name: message-right-notch-focus;
    animation-duration: 1s;
}

@-webkit-keyframes message-right-notch-focus {
    from {fill: #d4f1fb;}
    to {fill: #b8dae6;}
}

.rce-mbox-left-notch {
    position: absolute;
    left: -14px;
    top: 0px;
    width: 15px;
    height: 15px;
    fill: white;
}

.rce-mbox-left-notch.message-focus {
    animation-iteration-count: 2;
    -webkit-animation-iteration-count: 2;
    -webkit-animation-duration: 1s;
    animation-name: message-left-notch-focus;
    animation-duration: 1s;
}

@-webkit-keyframes message-left-notch-focus {
    from {fill: #fff;}
    to {fill: #dfdfdf;}
}

.rce-mbox-title {
    margin: 0;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 13px;
    color: #4f81a1;
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.rce-mbox-title:hover {
    text-decoration: underline;
}

.rce-mbox-title--clear {
    margin-bottom: 5px;
}

.rce-mbox-status {
    margin-left: 3px;
    font-size: 15px;
}

.rce-mbox-title > .rce-avatar-container {
    margin-right: 5px;
}
.rce-mbox-file {
    padding-bottom: 13px;
}

.rce-mbox-file > button {
    background: #e9e9e9;
    display: flex;
    border-radius: 5px;
    margin-top: -3px;
    margin-right: -6px;
    margin-left: -6px;
    align-items: center;
    min-height: 52px;
    max-width: 500px;
    padding: 5px 0;
    cursor: pointer;
    user-select: none;
    outline: none;
    border:none;
}

.rce-mbox-file > button > * {
    padding: 0px 10px;
}

.rce-mbox-file--icon {
    font-size: 30px;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.rce-mbox-file--size {
    font-size: 10px;
    margin-top: 3px;
    max-width: 52px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.rce-mbox-file--text {
    font-size: 13.6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.rce-mbox-file--buttons {
    font-size: 30px;
    align-items: center;
    display: flex;
}
.rce-mbox-file--buttons .rce-error-button {
    display: inherit;
}

.rce-mbox-file--loading {
    font-size: 15px;
    width: 40px;
    height: 40px;
}
.rce-container-smsg {
    display: flex;
    align-items: center;
    justify-content: center;
}

.rce-smsg {
    position: relative;
    background: white;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;
    margin: 5px 0px;
    padding: 6px 9px 8px 9px;
    float: left;
    max-width: 70%;
    align-items: center;
    justify-content: center;
}

.rce-smsg-text {
    text-align: center;
    display: inline-block;
    font-size: 15px;
}
.rce-mbox-location {
    position: relative;
    width: 250px;
    height: 150px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -3px;
    margin-right: -6px;
    margin-left: -6px;
    border-radius: 5px;
}

.rce-mbox-location-img {
    width: 100%;
}

.rce-mbox-location-text {
    padding: 5px 0;
    width: 250px;
    margin-left: -6px;
    margin-right: -6px;
}
.rce-mbox-spotify {
    margin-top: -2px;
    overflow: hidden;
    margin-right: -6px;
    margin-left: -6px;
    display: flex;
    border-radius: 5px;
}
.rce-mbox-reply {
    position: relative;
    overflow: hidden;
    display: flex;
    margin-top: -3px;
    margin-bottom: 6px;
    margin-right: -6px;
    margin-left: -6px;
    border-radius: 5px;
    background: #ececec;
    padding: 0 5px;
    padding-right: 0;
    font-size: 12px;
    cursor: pointer;
    transition: 200ms;
    user-select: none;
}

.rce-mbox-reply.rce-mbox-reply-border {
    border-left: 5px solid;
}

.rce-mbox-reply:hover {
    opacity: 0.85;
}

.rce-mbox-reply-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3px 0;
    flex: 1;
}

.rce-mbox-reply-owner {
    font-size: 13px;
}

.rce-mbox-reply-message {
    color: #5a5a5a;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
}

.rce-mbox-reply-right {
    width: 40px;
    height: 40px;
}

.rce-mbox-reply-right img {
    width: 100%;
}

.rce-mbox-reply-text {
    padding: 5px 0;
    width: 250px;
    margin-left: -6px;
    margin-right: -6px;
}
.rce-mbox-mtmg {
    display: flex;
    justify-content: center;
    align-content: center;
    padding-bottom: 13px;
    min-width: 425px;
    max-width: 425px;
}

.rce-mtmg {
    width: 100%;
    position: relative;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    margin: 5px 0px;
    float: left;
    border-radius: 2px;
}

.rce-mtmg-title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 300px;
}

.rce-mtmg-subject {
    text-align: start;
    display: inline-block;
    font-size: 15px;
    padding: 5px 9px;
}

.rce-mtmg-toogleItem {
    width: 100%;
    height: 100%;
}

.rce-mtmg-body {
    height: 50px;
    background: #6264a7;
    color: white;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
}

.rce-mtmg-body:hover {
    opacity: 0.9;
}

.rce-mtmg-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 10px;
}

.rce-mtmg-item > svg {
    width: 23px;
    height: 23px;
}

.rce-mtmg-content {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
}

.rce-mtmg-date {
    color: #cecece;
    font-size: 13px;
}

.rce-mtmg-body-bottom {
    display: flex;
    flex-direction: row;
    padding: 9px;
    color: #6264a7;
    cursor: pointer;
    font-size: 13px;
}

.rce-mtmg-bottom--tptitle {
    display: flex;
    justify-content: center;
    align-items: center;
}

.rce-mtmg-bottom--tptitle > svg,
.rce-mtmg-body-bottom--bttitle > svg {
    color: #6264a7a1;
}

.rce-mtmg-toogleContent {
    display: none;
    height: auto;
    min-height: 60px;
    flex-direction: column;
}

.rce-mtmg-toogleContent--click {
    display: flex;
}

.rce-mtmg-right-icon {
    right: 10px;
    cursor: pointer;
    height: 100%;
    background: transparent !important;
}

.rce-mtmg-body .rce-dropdown-container {
    height: 100%;
}

.rce-mtmg-right-icon > svg {
    width: 23px;
    height: 23px;
}

.rce-mitem {
    display: flex;
    padding: 10px 8px;
}

.rce-mitem:hover,
.rce-mitem-event:hover {
    background: #ececec;
}

.rce-mitem-event {
    user-select:  none;
}

.rce-mitem-body {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
}

.rce-mitem-body-content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.rce-mitem-body--top {
    display: flex;
    align-items: center;
    margin-bottom: 2px;
    user-select: none;
}

.rce-mitem-body--top-title {
    font-size: 15px;
    color: #6264a7;
    padding: 0px 15px 0 0;
    text-transform: capitalize;
    font-weight: 600;
}

.rce-mitem-body--top-title:hover {
    cursor: pointer;
    text-decoration: underline;
}

.rce-mitem-body--bottom-title {
    color: #252525;
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.rce-mitem-body--top-time {
    font-size: 12px;
    color: rgba(0,0,0,0.4);
}

.rce-mitem-bottom-body {
    padding: 10px 8px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.rce-mitem-body.avatar {
    padding: 8px 10px 0 0;
}

.rce-mitem.avatar {
    padding: 8px 5px 0 0;
}

.rce-mitem.no-avatar {
    padding: 8px 10px 0 0;
}

.rce-mitem.no-avatar > svg {
    width: 19px;
    height: 19px;
}

.rce-mitem.avatar img {
    width: 22px;
    height: 22px;
    border: none !important;
    background: #ccc;
    border-radius: 100%;
}

.rce-mitem-body.avatar > svg {
    width: 19px;
    height: 19px;
}

.rce-mitem-bottom-body-top {
    display: flex;
    flex-direction: column;
}

.rce-mitem-bottom-body-top-title > svg {
    padding: 0 7px 0 0;
}

.rce-mitem-avatar-content {
    position: absolute;
    right: 10px;
    display: flex;
}

.rce-mitem-avatar {
    padding: 0 3px 0 0;
    display: flex;
}

.rce-mitem-tooltip {
    display: inline;
    position: relative;
}

.rce-mitem-tooltip-text {
    margin: 5px
}

.rce-mitem-tooltip-text:after{
    content: "";
    left: 15%;
    top: 29px;
    position: absolute;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 11px solid #444;
    opacity: 0;
    transition: opacity 0.8s linear 0.2s;
  }

.rce-mitem-tooltip[tooltip]:after {
    display: flex;
    justify-content: center;
    background: #444;
    border-radius: 8px;
    color: #fff;
    content: attr(tooltip);
    font-size: 14px;
    padding: 5px;
    position: absolute;
    opacity: 0;
    transition: opacity 0.8s linear 0.2s;
    min-width: 415px;
    max-width: 415px;
    top: 40px;
    right: -13px;
    z-index: 1;
}

.rce-mitem-tooltip-text:hover:after {
    opacity: 1;
    transition: opacity 0.8s linear;
}

.rce-mitem-tooltip[tooltip]:hover:after {
    opacity: 1;
    transition: opacity 0.8s linear  0.1s;
}

.rce-mitem-tooltip[tooltip]:hover .rce-mitem-tooltip-text:after {
    opacity: 1;
}

.rce-mitem-length {
    color: #fff;
    font-size: 14px;
    background: #e48989;
    display: flex;
    align-items: center;
    text-align: center;
    width: 25px;
    height: 25px;
    display: flex;
    border-radius: 50%;
}

.rce-mitem-avatar img {
    width: 50px;
    height: 50px;
    border: none !important;
    background: #ccc;
    border-radius: 100%;
}

.rce-mtmg-call-record {
    width: 350px;
    height: 85%;
    background: #eaeaea;
    margin-top: 11px;
}

.rce-mtmg-call-body {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    position: relative;
}

.rce-mtmg-call-avatars {
    width: 140px !important;
    height: 100px !important;
    position: relative;
}

.rce-mtmg-call-avatars img {
    width: 100% !important;
    height: 100% !important;
    background: #ccc;
    cursor: pointer;
}

.rce-mtmg-call-body-title {
    display: flex;
    position: relative;
    flex-direction: column;
    top: 30px;
    left: 15px;
}

.rce-mtmg-call-body-title > span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 185px;
}

.rce-mtmg-call-body-bottom {
    color: #505050;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 185px;
    font-size: 12px;
}

.rce-mtmg-record-time {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 13px;
    background: #000000cf;
    color: white;
    padding: 4px;
    border-radius: 5px;
}
.rce-avatar-container {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rce-avatar-container .rce-avatar {
    width: 100%;
    height: 100%;
}

.rce-avatar-container.flexible .rce-avatar {
    height: auto !important;
    width: 100% !important;
    border-radius: unset !important;
    overflow: unset !important;
}

.rce-avatar-container.default{
    width: 25px;
    height: 25px;
}

.rce-avatar-container.rounded{
    border-radius: 5px;
}

.rce-avatar-container.circle{
    border-radius: 100%;
}

.rce-avatar-container.xsmall{
    width: 30px;
    height: 30px;
}

.rce-avatar-container.small{
    width: 35px;
    height: 35px;
}

.rce-avatar-container.medium{
    width: 40px;
    height: 40px;
}

.rce-avatar-container.large{
    width: 45px;
    height: 45px;
}

.rce-avatar-container.xlarge{
    width: 55px;
    height: 55px;
}

@keyframes avatarLazy {
    0% {
        opacity:1;
    }
    50% {
        opacity:.5;
    }
    100% {
        opacity:1;
    }
}

.rce-avatar-lazy {
    animation: avatarLazy normal 2s infinite ease-in-out;
}

.rce-avatar-container.rce-citem-avatar-encircle-status {
    box-sizing: border-box;
    position: relative;
}

.rce-avatar-letter {
    margin-top: 5px;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rce-avatar-letter-background{
    height: 35px;
    width: 35px;
    border-radius: 20px;
}
.rce-dropdown-container {
    position: relative;
}
.rce-dropdown {
    min-width: 100%;
    box-sizing: border-box;
    padding: 8px 15px;
    background: #fff;
    border-radius: 5px;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    position: absolute;
    box-shadow: 0px 0px 5px 0px rgba(163, 163, 163, 1);
    transform-origin: left top;
    z-index: 99999;
}

.rce-dropdown-title {
    font-size: 14px;
    color: '#000';
    font-weight: 500;
}

.rce-dropdown.dropdown-show{
    animation: dropdown-scaling 0.2s ease forwards;
    display: flex;
}

@keyframes dropdown-scaling {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
        transform: scale(1.1);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.rce-dropdown.dropdown-hide{
    animation: dropdown-reverse-scaling 0.2s ease forwards;
    display: flex;
}

@keyframes dropdown-reverse-scaling {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.1);
    }
    100% {
        opacity: 0;
        transform: scale(0);
    }
}

.rce-dropdown-open__nortwest {
    transform-origin: left top;
    left: 0;
    top: 100%;
    margin-top: 5px
}

.rce-dropdown-open__norteast {
    transform-origin: right top;
    right: 0;
    top: 100%;
    margin-top: 5px
}

.rce-dropdown-open__southwest {
    transform-origin: left bottom;
    left: 0;
    bottom: 100%;
    margin-bottom: 5px
}

.rce-dropdown-open__southeast {
    transform-origin: right bottom;
    right: 0;
    bottom: 100%;
    margin-bottom: 5px
}

.rce-dropdown ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.rce-dropdown ul li {
    white-space: nowrap;
    color: #767676;
    padding: 8px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    border-bottom: 1px solid #e9e9e9;
    box-sizing: border-box;
    user-select: none;
}

.rce-dropdown ul li:last-child {
    border: none;
}

.rce-dropdown ul li:hover a {
    color: #3a6d8c;
}

.rce-dropdown.fade {
    opacity: 0;
    transform: scale(1);
    animation: dropdown-fade 0.5s ease forwards;
}

@keyframes dropdown-fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.rce-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 5px;
    cursor: pointer;
    padding: 8px;
    text-align: center;
    box-sizing: border-box;
    background: #3979aa;
    color: white;
    transition: all 0.15s ease;
    user-select: none;
    border: none;
    outline: none;
    border: none;
    position: relative;
}

.rce-button-icon--container {
    display: flex;
    align-items: center;
}

.rce-button:hover {
    opacity: 0.8;
}

.rce-button:active {
    opacity: 0.6;
}

.rce-button.outline {
    background: rgba(0, 0, 0, 0) !important;
    border: 1px solid #3979aa;
    color: #3979aa;
}

.rce-button.outline:hover {
    opacity: 0.6;
}

.rce-button.outline:active {
    opacity: 0.3;
}

.rce-button.transparent {
    background: rgba(0, 0, 0, 0) !important;
}

.rce-button.transparent:hover {
    opacity: 0.6;
}

.rce-button.transparent:active {
    opacity: 0.3;
}

.rce-button-icon {
    position: relative;
    font-size: 18px;
    display: flex;
    padding: 0 3px;
}

.rce-button-badge{
    border-radius: 4px;
    padding: 4px;
    background: #f64b34;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -7px;
    top:-7px;
    font-size: 10px;
}

.rce-button.circle {
    min-width: 35px;
    min-height: 35px;
    border: 1px solid #3979aa;
    border-radius: 100%;
}
.rce-mbox-photo {
    margin-top: -3px;
    margin-right: -6px;
    margin-left: -6px;
}

.rce-mbox-photo .rce-mbox-text {
    padding: 5px 0px;
    max-width: 300px;
    margin: auto;
}

.rce-mbox-photo--img {
    position: relative;
    display: flex;
    overflow: hidden;
    justify-content: center;
    border-radius: 5px;
    max-height: 300px;
}

.rce-mbox-photo--img__block {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    border-radius: 5px;
    display: flex;
}

.rce-mbox-photo--img img {
    height: 100%;
    min-height: 100px;
    user-select: none;
}

.rce-mbox-photo--img__block-item {
    margin: auto;
    cursor: pointer;
    width: 100px;
    height: 100px;
}

.rce-mbox-photo--download {
    color: #efe;
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    font-size: 3.2em;
    outline: none;
    border: 1px solid #eee;
    border-radius: 100%;
    height: 100px;
    width: 100px;
}

.rce-mbox-photo--download:hover {
    opacity: .7;
}

.rce-mbox-photo--download:active {
    opacity: .3;
}

.rce-mbox-photo--error {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    font-size: 70px;
    color: #eaeaea;
}
.rce-mbox-audio {
    padding-bottom: 10px;
    max-width: 300px;
}

audio:focus {
    outline: none;
}.rce-container-citem {
    flex-direction: column;
    display: block;
    overflow: hidden;
    min-width: 240px;
}

.rce-container-citem.rce-citem-status-encircle {
    position: relative;
}

.rce-citem {
    position: relative;
    background: white;
    display: flex;
    flex-direction: row;
    height: 72px;
    cursor: pointer;
    user-select: none;
    max-width: 100%;
    overflow: hidden;
    min-width: 240px;
}

.rce-citem:hover {
    background: #f9f9f9;
}

.rce-citem-avatar {
    position: relative;
    padding: 0 15px 0 13px;
    justify-content: center;
    display: flex;
    align-items: center;
}

.rce-citem-status {
    width: 20px;
    height: 20px;
    bottom: 10px;
    right: 10px;
    position: absolute;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ccc;
}

.rce-citem-avatar.rce-citem-status-encircle .rce-citem-status {
    left:0;
    right:0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    margin: auto;
    border-radius: 100%;
}

.rce-citem-avatar img {
    width: 50px;
    height: 50px;
    border: none !important;
    background: #ccc;
    border-radius: 100%;
    overflow: hidden;
    font-size: 10px;
    text-align: center;
    line-height: 50px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.rce-citem-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-right: 15px;
    border-bottom: 1px solid rgba(0,0,0,.05);
    overflow: hidden;
}

.rce-citem-body--top {
    display: flex;
}

.rce-citem-body--bottom {
    margin-top: 4px;
    display: flex;
}

.rce-citem-body--bottom-title, .rce-citem-body--top-title {
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.rce-citem-body--top-title {
    font-size: 16px;
}

.rce-citem-body--bottom-title {
    color: #555;
    font-size: 15px;
}

.rce-citem-body--top-time {
    font-size: 12px;
    color: rgba(0,0,0,0.4)
}

.rce-citem-body--bottom-status {
    margin-left: 3px;
}

.rce-citem-body--bottom-status span {
    width: 18px;
    height: 18px;
    font-size: 12px;
    color: white;
    font-weight: bold;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 100%;
    background: red;
}
.rce-container-clist {
    display: block;
    overflow: auto;
}
.rce-container-mlist {
    position: relative;
    display: flex;
}

.rce-mlist {
    display: block;
    overflow: auto;
    position: relative;
    flex: 1;
}

.rce-mlist-down-button {
    position: absolute;
    right: 10px;
    bottom: 15px;
    width: 40px;
    height: 40px;
    background: #fff;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.05), 0 2px 5px 0 rgba(0,0,0,0.1);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    cursor: pointer;
    transition: 200ms;
}

.rce-mlist-down-button:hover {
    opacity: 0.7;
}

.rce-mlist-down-button--badge {
    position: absolute;
    right: -5px;
    top: -5px;
    background: red;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    font-size: 12px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
}
.rce-container-input {
    display: flex;
    min-width: 100%;
    box-sizing: border-box;
    flex-direction: row;
    background: #fff;
    align-items: center;
}

.rce-input {
    flex: 1;
    height: 40px;
    padding: 0 5px;
    border: none;
    border-radius: 5px;
    color: #333;
    font-size: 14px;
    box-sizing: border-box;
    outline: none;
}

.rce-input-textarea {
    height: 37px;
    padding: 10px 5px;
    resize: none;
}

.rce-input-buttons {
    display: flex;
    flex-direction: row;
    margin: 5px;
}

.rce-input-buttons > * {
    display: flex;
    flex-direction: row;
}

.rce-input-buttons .rce-button:nth-child(even) {
    margin-left: 5px;
    margin-right: 5px;
}

.rce-input-buttons .rce-button:last-child {
    margin-right: 0;
}

.rce-left-padding {
    padding-left: 10px;
    padding-right: 0px !important;
}

.rce-right-padding {
    padding-right: 10px;
    padding-left: 0px !important;
}

.rce-input::placeholder {
    color: #afafaf;
}
.rce-navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
}

.rce-navbar.light {
    background: #f4f4f4;
}

.rce-navbar.dark {
    background: #2f414c;
}

.rce-navbar-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.rce-navbar-item > * {
    display: flex;
    flex-direction: row;
}

.rce-navbar-item > * > * {
    margin-left: 5px;
}.rce-sbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    min-height: 100%;
}

.rce-sbar.light {
    background: #f4f4f4;
}

.rce-sbar.dark {
    background: #2f414c;
}

.rce-sbar-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
}

.rce-sbar-item > * {
    display: flex;
    flex-direction: column;
}

.rce-sbar-item__center {
    margin: 15px 0;
}.rce-popup-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: rgba(255, 255, 255, 0.7);
    z-index: 9999999999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.rce-popup {
    background: #fff;
    border-radius: 5px;
    padding: 0 10px 0 10px;
    width: 400px;
    min-height: 100px;
    box-shadow: 0px 0px 25px -2px rgba(79, 79, 79, 1);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    animation: popup-scaling 0.4s ease forwards;
    box-sizing: border-box;
}

@keyframes popup-scaling {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.5;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.rce-popup-header {
    padding: 18px 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
}

.rce-popup-content {
    padding: 8px;
    font-size: 14px;
    box-sizing: border-box;
}

.rce-popup-content * {
    margin: 0
}

.rce-popup-footer {
    padding: 18px 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
}

.rce-popup-footer>* {
    margin-left: 5px;
}.rce-container-mtitem {
    flex-direction: column;
    display: block;
    overflow: hidden;
    min-width: 240px;
}

.rce-mtitem {
    position: relative;
    background: white;
    display: flex;
    flex-direction: column;
    user-select: none;
    max-width: 100%;
    overflow: hidden;
    min-width: 240px;
    border-bottom: 1px solid rgba(0,0,0,.05);
}

.rce-mtitem:hover {
    background: #fbfbfb;
}

.rce-mtitem-top {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
}

.rce-mtitem-subject {
    padding: 0 10px;
    margin-top: 5px;
    font-size: 15px;
    overflow: hidden;
    color: #333;
    max-height: 35px;
    text-overflow: ellipsis;
}

.rce-mtitem-body {
    display: flex;
    flex: 1;
    flex-direction: row;
    display: flex;
    justify-content: center;
    padding: 0 10px;
    overflow: hidden;
    align-items: center;
}

.rce-mtitem-body--avatars {
    display: flex;
    flex: 1;
    overflow: hidden;
    opacity: 0.7;
}

.rce-mtitem-body--functions {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.rce-mtitem-footer {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
}

.rce-mtitem-body--avatars .rce-avatar-container {
    margin-left: -10px;
    border: 2px solid #fff;
}

.rce-mtitem-body--avatars .rce-avatar-container:first-child {
    margin: 0;
}

.rce-mtitem-letter {
    color: #fff;
    background: #e48989;
    display: flex;
    align-items: center;
    justify-content: center;
}

.rce-mtitem-button {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #5ba7c5;
    border-radius: 100%;
    padding: 3px;
    transition: 300ms;
}

.rce-mtitem-closable {
    font-size: 25px;
    color: #fff;
    background:#ff4a4f;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    padding: 3px;
    margin-right: 7px;
}

.rce-mtitem:hover .rce-mtitem-closable {
    display: flex;
    cursor: pointer;
}

.rce-mtitem-share {
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #5ba7c5;
    margin: -10px 0;
    transition: 300ms;
    position: relative;
    left: -10px;
}

.rce-mtitem-button:hover,
.rce-mtitem-share:hover {
    opacity: 0.8;
    cursor: pointer;
}

.rce-mtitem-date {
    color: #9f9f9f;
    font-size: 13px;
}
.rce-container-mtlist {
    display: block;
    overflow: auto;
}
`;
const Chat = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    id: "chat"
  }, /* @__PURE__ */ React.createElement("h1", null, "Chat"), /* @__PURE__ */ React.createElement(main$1.MessageBox, null), /* @__PURE__ */ React.createElement(main$1.ChatItem, {
    avatar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
    alt: "Reactjs",
    title: "Facebook",
    subtitle: "What are you doing?",
    date: new Date(),
    unread: 0
  }), /* @__PURE__ */ React.createElement(main$1.MessageBox, {
    position: "left",
    type: "photo",
    text: "react.svg",
    data: {
      uri: "https://facebook.github.io/react/img/logo.svg",
      status: {
        click: false,
        loading: 0
      }
    }
  }), /* @__PURE__ */ React.createElement(main$1.MessageBox, {
    reply: {
      photoURL: "https://facebook.github.io/react/img/logo.svg",
      title: "elit magna",
      titleColor: "#8717ae",
      message: "Aliqua amet incididunt id nostrud"
    },
    onReplyMessageClick: () => console.log("reply clicked!"),
    position: "left",
    type: "text",
    text: "Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure."
  }), /* @__PURE__ */ React.createElement(main$1.SystemMessage, {
    text: "End of conversation"
  }), /* @__PURE__ */ React.createElement(main$1.MessageList, {
    className: "message-list",
    lockable: true,
    toBottomHeight: "100%",
    dataSource: [
      {
        position: "right",
        type: "text",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        date: new Date()
      },
      {
        position: "left",
        type: "text",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        date: new Date()
      },
      {
        position: "right",
        type: "text",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        date: new Date()
      }
    ]
  }), /* @__PURE__ */ React.createElement(main$1.SideBar, {
    top: /* @__PURE__ */ React.createElement("div", null, "'TOP' area"),
    center: /* @__PURE__ */ React.createElement("div", null, "'CENTER' area"),
    bottom: /* @__PURE__ */ React.createElement("div", null, "'BOTTOM' area")
  }), /* @__PURE__ */ React.createElement(main$1.Avatar, {
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
    alt: "logo",
    size: "large",
    type: "circle flexible"
  }));
};
ReactDOM.render(/* @__PURE__ */ React.createElement(Chat, null), document.getElementById("app"));
