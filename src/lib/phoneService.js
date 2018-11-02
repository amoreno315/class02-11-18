import axios from 'axios';

class PhoneService {

  constructor() {
    this.phoneService = axios.create({
      baseURL: 'http://localhost:5000/api',
    });
  }

  getPhones() {
    return this.phoneService.get('/phones')
      .then(({ data }) => data );
  }

  addPhone(body) {
    return this.phoneService.post('/phones', body)
      .then(({ data }) => data );
  }

  editPhone(id, body) {
    return this.phoneService.put(`/phones/${id}`, body)
      .then(({ data }) => data );
  }

  deletePhone(id) {
    return this.phoneService.delete(`/phones/${id}`)
      .then(({ data }) => data );
  }
}

const phoneService = new PhoneService();

export default phoneService;