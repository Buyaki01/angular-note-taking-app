export interface Student {
    id: number;
    name: string;
    phone: string;
    age: string;
    languages: Array<string>;
}

interface Order {
    id: number;
    OrderType: string;
    Price: number;
    Volume: number;
}

export interface OrderBook {
    BuyOrders: Array<Order>;
    CreatedTimestampUtc: string;
    SellOrders: Array<Order>;
}

interface Price {
    bid: number;
    ask: number;
    last: number;
}

export interface LatestPrices {
    status: string;
    prices: {
        btc: Price;
        ltc: Price;
    }
}