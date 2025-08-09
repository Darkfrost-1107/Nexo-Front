import axios from 'axios';
import ServiceUrls from '@/shared/constants/services.urls'
import { JWTErrorInterceptor, JWTInterceptor } from '../interceptors/jwt-interceptor';

const MainConnector = axios.create({
    baseURL: ServiceUrls.main ,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

MainConnector.interceptors.request.use(JWTInterceptor)
MainConnector.interceptors.response.use((a) => a, JWTErrorInterceptor)

export default MainConnector;