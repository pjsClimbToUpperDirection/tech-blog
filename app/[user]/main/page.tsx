"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// 본 경로로 요청시 기본적으로 [user]/main/1 경로로 redirect
function RedirectPage({ params } : { params : { user: string }}) {
    const router = useRouter();
    useEffect(() => {
        router.push(`/${params.user}/main/1`); // 리다이렉트할 경로
    }, []);

    return null;
}

export default RedirectPage;
