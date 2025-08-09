import axios from 'axios';
import ServiceUrls from '@/shared/constants/services.urls'
import { JWTErrorInterceptor, JWTInterceptor } from '../interceptors/jwt-interceptor';

const BusinessServiceConnector = axios.create({
    baseURL: ServiceUrls.business,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

BusinessServiceConnector.interceptors.request.use(JWTInterceptor)
BusinessServiceConnector.interceptors.response.use((a) => a, JWTErrorInterceptor)

export default BusinessServiceConnector;