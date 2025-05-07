import axios from 'axios';

class InspectionService {
    load() {
        return axios.get('https://raw.githubusercontent.com/jochumjurre/feedback-web-components/refs/heads/main/db.json');
    }
}

export default new InspectionService