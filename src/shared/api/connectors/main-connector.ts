import axios from 'axios';
import ServiceUrls from '@/shared/constants/services.urls'
import JWTInterceptor from '../interceptors/jwt-interceptor';

const MainConnector = axios.create({
    baseURL: ServiceUrls.main ,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

MainConnector.interceptors.request.use(JWTInterceptor)

export default MainConnector;