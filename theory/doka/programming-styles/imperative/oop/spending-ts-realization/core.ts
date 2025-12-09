
enum RecordKind {
    Spending,
    Income
}

type MoneyAmount = number;

type TimeStamp = number;

type DataRecord = {
    kind: RecordKind,
    amount: MoneyAmount,
    dateTime: TimeStamp
}



interface History {
    addRecord: (record: DataRecord) => void;
}







const spending: DataRecord = {
    amount: 100,
    kind: RecordKind.Spending,
    dateTime: 12312
}