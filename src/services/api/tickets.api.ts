import axios from 'axios';

const API = 'https://front-test.beta.aviasales.ru';

class TicketsApi {
  getKey = async () => {
    try {
      const { data: { searchId } } = await axios.get(`${API}/search`);
      return searchId;
    } catch (e) {
      throw e;
    }
  };

  getTicketsByKey = async (key: string) => {
    try {
      const { data: { tickets } } = await axios.get(`${API}/tickets?searchId=${key}`);
      return tickets;
    } catch (e) {
      throw e;
    }
  };

  fetchTickets = async () => {
    try {
      const key = await this.getKey();
      return await this.getTicketsByKey(key);
    } catch (e) {
      throw e;
    }
  };
}

export default new TicketsApi();
