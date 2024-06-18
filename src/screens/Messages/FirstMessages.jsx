import { useEffect, useState } from 'react';
import { App, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { LoadingFullScreen } from '../../components';
import { useLocation } from 'react-router-dom';

export default function FirstMessages() {
    const { message } = App.useApp();
    const location = useLocation();
    const { t } = useTranslation();

    const [loading, setLoading] = useState(false);
    const [threadId, setThreadId] = useState('');

    if (loading) return <LoadingFullScreen onlyFillContainer />;

    return (
        <div>
            <Input placeholder="Enter friend uid" />
        </div>
    );
}
