import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Notification: React.FC = () => {
    const NotificationItems = [
        { title: 'Notification', description: 'Notification', uri: '#' },
        { title: 'Notification', description: 'Notification', uri: '#' },
        { title: 'Notification', description: 'Notification', uri: '#' },
    ];

    const [show, setShow] = React.useState(false);

    return (
        <div
            id="Notification"
            className="relative group"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <button
                id="notification-btn"
                type="button"
                className="flex items-center gap-1 hover:text-white transition-colors"
                aria-label="Thông báo"
            >
                <FontAwesomeIcon
                    icon={faBell}
                    style={{ width: '14px', height: '14px' }}
                />
                <span className="hidden sm:inline">Thông Báo</span>
            </button>

            <div
                className={`absolute right-0 top-full z-10 mt-2 w-[400px] max-h-[474px]
                    border border-[1px] border-[#d0d0d0] bg-white p-2 shadow-lg
                    transition-all duration-200 ease-out pointer ${
                        show
                            ? 'visible translate-y-0 opacity-100'
                            : 'invisible -translate-y-2 opacity-0'
                    }`}
            >
                <h4 className=" flex items-center text-left indent-[12px] w-auto h-[40px] text-[#00000042] text-sm pl-[10px] pr-[10px]">
                    Thông báo mới nhất
                </h4>

                {NotificationItems.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`bg-[#fff2ee] hover:bg-white w-full h-[56px] ${
                                show
                                    ? 'visible font-semibold  opacity-[0.7]'
                                    : 'invisible -translate-y-2 opacity-0 pointer-events-none'
                            }`}
                        >
                            <a
                                href={item.uri}
                                type="link"
                                className={`flex items-center w-full h-full flex mt-[5px] hover:bg-[#fafafa]`}
                            >
                                <div
                                    className="flex justify-center items-center w-[40px] h-[40px] bg-[#f5f5f5] overflow-hidden"
                                    style={{ marginLeft: '10px' }}
                                >
                                    <div className="bg-[url(https://placehold.co/40x40)] no-repeat"></div>
                                </div>
                                <div className="mr-[10px]">
                                    <h5
                                        className={`rounded-md text-left indent-[10px] text-sm text-black
                                    transition-colors`}
                                    >
                                        {item.title}
                                    </h5>
                                    <p className="mb-[5px] text-xs text-[#0000008a] text-left indent-[10px] leading-[15px]">
                                        {item.description}
                                    </p>
                                </div>
                            </a>
                        </div>
                    );
                })}

                <Link
                    href="#"
                    className="inline-flex justify-center items-center text-black text-base font-normal no-underline bg-white w-full h-[40px] hover:bg-[#fafafa]"
                >
                    Xem tất cả
                </Link>
            </div>
        </div>
    );
};

export default Notification;
