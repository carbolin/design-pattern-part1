// Exercise

// import { ExcelReader } from "./chain-of-responsibility/exercise/excel-reader";
// import { Exception } from "./chain-of-responsibility/exercise/exception";
// import { QuickbooksReader } from "./chain-of-responsibility/exercise/quickbooks-reader";
// import { NumbersReader } from "./chain-of-responsibility/exercise/numbers-reader";
// import { DataReader } from "./chain-of-responsibility/exercise/data-reader";

// const fileName = 'test.txt';
// const exception = new Exception(null);
// const quickbook = new QuickbooksReader(exception);
// const numbers = new NumbersReader(quickbook);
// const excel = new ExcelReader(numbers);
// const data = new DataReader(excel);
// data.read(fileName);


// import { Webserver } from "./chain-of-responsibility/webserver";
// import { Authenticator } from "./chain-of-responsibility/authenticator";
// import { Compressor } from "./chain-of-responsibility/compressor";
// import { Logger } from "./chain-of-responsibility/logger";
// import { HttpRequest } from "./chain-of-responsibility/http-request";
// import { Encryptor } from "./chain-of-responsibility/encryptor";

// const encryptor = new Encryptor(null)
// const compressor = new Compressor(encryptor);
// const logger = new Logger(compressor);
// const auth = new Authenticator(logger);
// const webserver = new Webserver(auth);
// webserver.handle(new HttpRequest('admin', '1234'));

