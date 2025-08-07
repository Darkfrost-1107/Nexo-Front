import axios from 'axios';
import ServiceUrls from '@/shared/constants/services.urls'

const BusinessServiceConnector = axios.create({
    baseURL: ServiceUrls.business,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default BusinessServiceConnector;