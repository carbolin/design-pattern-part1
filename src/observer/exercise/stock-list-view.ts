import { Observer } from "./observer";
import { Stock } from "./stock";

export class StockListView implements Observer {

    private stocks: Stock[] = [];

    aadStock(stock: Stock) {

        this.stocks.push(stock);
        stock.attach(this);
    }

    show() {

        for (const stock of this.stocks)
            stock.toSTring();
    }

    update(): void {

        console.log('Stock Price Updated - Refreshing StockList');
        this.show();
    }

}
