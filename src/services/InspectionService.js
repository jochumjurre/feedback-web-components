import axios from 'axios';

class InspectionService {
    async load(useOnline = true) {
        if (useOnline) {
            const response = await axios.get('https://raw.githubusercontent.com/jochumjurre/feedback-web-components/refs/heads/main/db.json');
            return response.data;
        } else {
            const data = await import('../../db.json');
            return data.default;
        }
    }
}

export default new InspectionService();
