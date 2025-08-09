import axios from 'axios';
import ServiceUrls from '@/shared/constants/services.urls'
import { JWTErrorInterceptor, JWTInterceptor } from '../interceptors/jwt-interceptor';

const UserServiceConnector = axios.create({
    baseURL: ServiceUrls.users,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

UserServiceConnector.interceptors.request.use(JWTInterceptor)
UserServiceConnector.interceptors.response.use((a) => a , JWTErrorInterceptor)


export default UserServiceConnector;