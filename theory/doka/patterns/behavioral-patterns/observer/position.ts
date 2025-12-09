

interface PositionObserver {
  update(position: string): void;
}


class SoftwareEngineerApplicant implements PositionObserver {
  name: string
  position: string

  constructor(name: string, position: string) {
    this.name = name
    this.position = position
  }

  update(position: string) {
    if (position !== this.position) {
      return
    }

    console.log(
      `Привет! Меня зовут ${this.name}. Вот моё резюме на позицию ${position}.`
    )
  }
}


interface Observable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(data: any): void;
}


class HrAgency implements Observable {
  private listeners: PositionObserver[] = []

  subscribe(applicant: PositionObserver): void {
    this.listeners.push(applicant)
  }

  unsubscribe(applicant: PositionObserver): void {
    this.listeners = this.listeners.filter(
      (listener) => listener.name !== applicant.name
    )
  }

  notify(position: string): void {
    this.listeners.forEach((listener) => {
      listener.update(position)
    })
  }
}


const agency = new HrAgency()

const mark = new SoftwareEngineerApplicant('Марк', 'архитектор')
const alice = new SoftwareEngineerApplicant('Алиса', 'тимлид')

agency.subscribe(mark)
agency.subscribe(alice)

agency.notify('архитектор')
// Привет! Меня зовут Марк. Вот моё резюме на позицию архитектор.

agency.notify('тимлид')
// Привет! Меня зовут Алиса. Вот моё резюме на позицию тимлид.

agency.notify('cto')
// На эту вакансию никто не подписывался.
