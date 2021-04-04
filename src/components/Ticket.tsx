import React from 'react';
import ticketImg from '../assets/img/ticket-img.png'

const Ticket = () => {
    return (
        <div className="tickets__item ticket">
            <div className="ticket__head">
                <div className="ticket__price">
                    13 400 Р
                </div>
                <div className="ticket__img">
                    <img src={ticketImg} alt="Ticket" />
                </div>
            </div>
            <div className="ticket__info info">
                <div className="ticket__info-row info__row">
                    <div className="info__col">
                        <div className="info__col-head">
                            MOW – HKT
                        </div>
                        <div className="info__col-val">
                            10:45 – 08:00
                        </div>
                    </div>
                    <div className="info__col">
                        <div className="info__col-head">
                            MOW – HKT
                        </div>
                        <div className="info__col-val">
                            10:45 – 08:00
                        </div>
                    </div>
                    <div className="info__col">
                        <div className="info__col-head">
                            MOW – HKT
                        </div>
                        <div className="info__col-val">
                            10:45 – 08:00
                        </div>
                    </div>
                </div>
                <div className="ticket__info-row info__row">
                    <div className="info__col">
                        <div className="info__col-head">
                            MOW – HKT
                        </div>
                        <div className="info__col-val">
                            10:45 – 08:00
                        </div>
                    </div>
                    <div className="info__col">
                        <div className="info__col-head">
                            MOW – HKT
                        </div>
                        <div className="info__col-val">
                            10:45 – 08:00
                        </div>
                    </div>
                    <div className="info__col">
                        <div className="info__col-head">
                            MOW – HKT
                        </div>
                        <div className="info__col-val">
                            10:45 – 08:00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
