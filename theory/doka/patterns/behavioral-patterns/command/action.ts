

const updateUserAction = {
  type: 'UPDATE_USER',
  payload: {
    name: 'Alex',
    email: 'hi@site.com',
  },
}


function userReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state /*...*/ }
  }
}


interface Command<TPayload> {
  execute(payload: TPayload): void;
}

const updateUser: Command = {
  execute(payload) {
    const { name, email } = payload
    // ...Логика обработки команды.
  },
}


interface Command<TPayload> {
  name: string;
  payload: TPayload;
}

interface CommandHandler<TCommand, TResult, TError> {
  execute(command: TCommand): TResult;
}


const userCommandHandler: CommandHandler = {
  execute(command) {
    try {
      // ...Пробуем выполнить команду,
      // возвращаем результат, если всё хорошо:
      return new Result('ok')
    } catch (e) {
      // Или возвращаем ошибку:
      return new Result('error', e)
    }
  },
}

const updateUserCommand = {
  type: 'UPDATE_USER',
  payload: {
    /*...*/
  },
}

userCommandHandler.execute(updateUserCommand)
