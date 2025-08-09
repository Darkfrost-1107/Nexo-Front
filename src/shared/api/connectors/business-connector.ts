import axios from 'axios';
import ServiceUrls from '@/shared/constants/services.urls'
import JWTInterceptor from '../interceptors/jwt-interceptor';

const BusinessServiceConnector = axios.create({
    baseURL: ServiceUrls.business,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

BusinessServiceConnector.interceptors.request.use(JWTInterceptor)

export default BusinessServiceConnector;