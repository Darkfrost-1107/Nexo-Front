import axios from 'axios';
import ServiceUrls from '@/shared/constants/services.urls'

const UserServiceConnector = axios.create({
    baseURL: ServiceUrls.users,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default UserServiceConnector;