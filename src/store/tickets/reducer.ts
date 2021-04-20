import produce from 'immer';

const initialTicketsState: any = {
  data: undefined
};

const tickets = produce((draft, action: any) => {
  switch (action.type) {
    default:
      break;
  }
}, initialTicketsState);

export default tickets;
