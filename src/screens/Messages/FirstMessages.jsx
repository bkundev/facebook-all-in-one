import { useEffect, useState } from 'react';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';
import { LoadingFullScreen } from '../../components';

export default function FirstMessages() {
    const { message } = App.useApp();
    const { t } = useTranslation();

    const [loading, setLoading] = useState(false);

    useEffect(() => {}, []);

    if (loading) return <LoadingFullScreen onlyFillContainer />;

    return <div>First messages</div>;
}
