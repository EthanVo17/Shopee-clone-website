import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const DownloadApp: React.FC = () => {
    const [show, setShow] = React.useState(false);

    return (
        <div
            id="download-app-link"
            className="relative hidden sm:flex items-center gap-1 hover:text-white transition-colors"
        >
            <div
                className="hover:opacity-[0.7]"
                onMouseEnter={() => setShow(true)}
            >
                <FontAwesomeIcon
                    icon={faDownload}
                    style={{ width: '13px', height: '13px' }}
                />
                <span>Tải ứng dụng</span>
            </div>

            {show && (
                <div
                    className="absolute z-50 top-[24px] w-[184px] h-[276px] left-0 pt-[20px]"
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                >
                    <div className="bg-white border rounded-xs mt-[10px] p-[2px] w-[180px] h-full">
                        <img
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/e82a7ab18aeae26e.png"
                            alt="download-qr-code"
                            className="w-[180px] h-[180px] "
                            style={{ marginBottom: '10px' }}
                        />

                        <div
                            className="flex flex-wrap items-center justify-center gap-3"
                            style={{
                                paddingTop: 0,
                                paddingLeft: '15px',
                                paddingRight: '15px',
                                paddingBottom: '5px',
                            }}
                        >
                            <div className="mt-[5px]">
                                <Link href="#">
                                    <img
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/135555214a82d8e1.png"
                                        alt="App-store"
                                        className="w-[70px] h-[18px]"
                                    />
                                </Link>
                            </div>

                            <div className="mt-[5px]">
                                <Link href="#">
                                    <img
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1fddd5ee3e2ead84.png"
                                        alt="Play-store"
                                        className="w-[70px] h-[18px]"
                                    />
                                </Link>
                            </div>

                            <div className="mt-[5px]">
                                <Link href="#">
                                    <img
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4abb5c0809818b22.png"
                                        alt="App-Gallery"
                                        className="w-[70px] h-[18px]"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// setTimeout(() => {
//     debugger;
// }, 5000);

export default DownloadApp;
