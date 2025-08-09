import axios from 'axios';
import ServiceUrls from '@/shared/constants/services.urls'
import JWTInterceptor from '../interceptors/jwt-interceptor';

const UserServiceConnector = axios.create({
    baseURL: ServiceUrls.users,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

UserServiceConnector.interceptors.request.use(JWTInterceptor)

export default UserServiceConnector;