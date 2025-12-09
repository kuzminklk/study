

type MusicNote = string;

interface Instrument {
    playNote(note: MusicNote): void;
}

class Violin implements Instrument {
    playNote(note) {
        console.log(`Играю ${note} на скрипке!`)
    }
}

class Cello implements Instrument {
    playNote(note) {
        console.log(`Играю ${note} на виолончели!`)
    }
}


type MusicPiece = string;

interface Musician {
    play(piece: MusicPiece): void;
}

class Violinist implements Musician {
    private instrument: Instrument = new Violin()

    play = (piece) => piece.forEach((note) => this.instrument.playNote(note))
}

class Cellist implements Musician {
  private instrument: Instrument = new Cello()

  play = (piece) => piece.forEach((note) => this.instrument.playNote(note))
}



interface ReservationFactory {
  reserveInstrument(): Instrument;
  notifyPlayer(): Musician;
}

class ViolinReservation implements ReservationFactory {
  reserveInstrument = () => new Violin()
  notifyPlayer = () => new Violinist()
}

class CelloReservation implements ReservationFactory {
  reserveInstrument = () => new Cello()
  notifyPlayer = () => new Cellist()
}

function reserve(reservation: ReservationFactory): void {
  reservation.notifyPlayer()
  reservation.reserveInstrument()
}