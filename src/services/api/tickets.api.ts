import axios from 'axios';

class TicketsApi {
  getKey = async () => {
    try {
      const { data: { searchId } } = await axios.get('/search');
      return searchId;
    } catch (e) {
      throw e;
    }
  };

  getTicketsByKey = async (key: string) => {
    try {
      const { data: { tickets } } = await axios.get(`/tickets?searchId=${key}`);
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
