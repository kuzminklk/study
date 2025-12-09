

interface RouteStrategy {
    findRoute(from: point, to: Point): Instruction[];
}


const pedestrianRoute: RouteStrategy = {
  findRoute(from, to) {
    // ...Логика построения маршрута для пешехода.
    return [
      /*...*/
    ]
  },
}

const cyclistRoute: RouteStrategy = {
  findRoute(from, to) {
    // ...Логика построения маршрута для велосипедиста.
    return [
      /*...*/
    ]
  },
}

const automobileRoute: RouteStrategy = {
  findRoute(from, to) {
    // ...Логика построения маршрута для автомобилиста.
    return [
      /*...*/
    ]
  },
}


class Context {
  // При создании укажем стратегию, которую будем использовать:
  constructor(private routeFinder: RouteStrategy) {}

  // Иногда полезно менять стратегию во время работы,
  // сделаем метод для этого
  public use(routeFinder: RouteStrategy) {
    this.routeFinder = routeFinder
  }

  public routeFromHomeToWork(): Instruction[] {
    const home: Point = {
      /*...*/
    }
    const work: Point = {
      /*...*/
    }
    return this.routeFinder.findRoute(home, work)
  }
}


const strategyContext = new Context(cyclistRoute)
strategyContext.routeFromHomeToWork()

strategyContext.use(pedestrianRoute)
strategyContext.routeFromHomeToWork()