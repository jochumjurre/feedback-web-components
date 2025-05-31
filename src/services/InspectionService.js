import axios from 'axios';

class InspectionService {
    load(useOnline = true) {
        if (useOnline) {
            return axios.get('https://raw.githubusercontent.com/jochumjurre/feedback-web-components/refs/heads/main/db.json');
        } else {
            return import('../../db.json');
        }
    }
}

export default new InspectionService