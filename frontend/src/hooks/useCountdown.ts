import React from 'react';
function formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + 'đ';
}

function getEndTime(): Date {
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    return end;
}

function useCountdown(target: Date) {
    const calc = React.useCallback(() => {
        const diff = target.getTime() - Date.now();
        if (diff <= 0) return { h: 0, m: 0, s: 0 };
        const totalSecs = Math.floor(diff / 1000);
        return {
            h: Math.floor(totalSecs / 3600),
            m: Math.floor((totalSecs % 3600) / 60),
            s: totalSecs % 60,
        };
    }, [target]);

    const [time, setTime] = React.useState(calc);

    React.useEffect(() => {
        const id = setInterval(() => setTime(calc()), 1000);
        return () => clearInterval(id);
    }, [calc]);

    return time;
}
export { formatPrice, useCountdown, getEndTime };
