import React, { Component, EventHandler } from 'react'

declare const webkitSpeechRecognition: typeof SpeechRecognition

interface Speech {
    recognition: any
}

interface Props {
    onEnd: (text: string) => void 
}

interface State {
    isRecognition: boolean
}


class Speech extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isRecognition: false
        }
    }

    start() {
        const LANG_JAPAN = "ja-JP";
        const recognition = new webkitSpeechRecognition();
        recognition.lang = LANG_JAPAN;
        this.setState({isRecognition: true});
        recognition.onend = () => {
            console.log('on end')
            recognition.stop();
            this.setState({isRecognition: false});
        }
        recognition.onresult = (e: any) => {
            if (e.results.length > 0) {
                this.props.onEnd(e.results[0][0].transcript);
                // this.setState({results: [e.results[0][0].transcript].concat(this.state.results)});
            }
        }
        recognition.onstart = () => { console.log('on start') }

        recognition.onspeechstart = () => { console.log('on speech start') }
        recognition.onspeechend = () => { console.log('on speech end') }

        // recognition.onosundstart = () => { console.log('on sound start') }
        recognition.onsoundend = () => { console.log('on sound end') }

        recognition.onaudiostart = () => { console.log('on audio start') }
        recognition.onaudioend = () => { console.log('on audio end') }

        recognition.start();
    }

    render() {
        if ('webkitSpeechRecognition' in window) {
            // ユーザのブラウザは音声合成に対応しています。
            return (
                <span className="speech" onClick={this.start.bind(this)}>
                    {this.state.isRecognition ? (
                        '認識中…'
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"/></svg>                )}
                </span>
            );
        } else {
            // ユーザのブラウザは音声合成に対応していません。
            return null
        }
    }
}

export default Speech