
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string, amount: number): void;
}


abstract class AbstractHandler implements Handler {
  private nextHandler: Handler

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler

    // Возвращаем переданный обработчик,
    // чтобы их можно было соединять в «паровозик»:
    // handler1.setNext(handler2).setNext(handler3)
    return handler
  }

  // Если обработчик не знает, как обработать запрос,
  // он вызовет метод абстрактного класса:
  public handle(request: string, amount: number): void {
    if (this.nextHandler) {
      return this.nextHandler.handle(request)
    }

    // Если ни один из обработчиков не знает,
    // как обработать запрос, то сработает эта строка:
    console.log('No handler found!')
  }
}


class UsdHandler extends AbstractHandler {
  public handle(request: string, amount: number): void {
    if (request === 'USD') {
      console.log(`You've been charged with ${amount}$!`)
      return
    }

    super.handle(request)
  }
}

class EurHandler extends AbstractHandler {
  public handle(request: string, amount: number): void {
    if (request === 'EUR') {
      console.log(`You've been charged with ${amount} euros!`)
      return
    }

    super.handle(request)
  }
}

class RubHandler extends AbstractHandler {
  public handle(request: string, amount: number): void {
    if (request === 'RUB') {
      console.log(`У вас списали ${amount}₽!`)
      return
    }

    super.handle(request)
  }
}


const usdHandler = new UsdHandler()
const rubHandler = new RubHandler()
const eurHandler = new EurHandler()

rubHandler.setNext(usdHandler).setNext(eurHandler)


function handlePurchase(
  handler: Handler,
  currency: string,
  amount: number
): void {
  handler.handle(currency, amount)
}

handlePurchase(rubHandler, 'USD', 20)
// You've been charged with 20$!

handlePurchase(rubHandler, 'RUB', 20)
// У вас списали 20₽!
