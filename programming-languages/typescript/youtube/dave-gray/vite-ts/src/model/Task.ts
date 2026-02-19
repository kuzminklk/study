

/* export class Task {

	constructor(
		private id: number,
		private title: string,
		private done: boolean
	) { }

} */

export interface TaskInterface {
	id: number,
	title: string,
	done: boolean
}

export class Task implements TaskInterface {

	constructor(
		private _id: number,
		private _title: string,
		private _done: boolean = false
	) { }


	get id(): number {
		return this._id
	}

	set id(id: number) {
		this._id = id
	}

	
	get title(): string {
		return this._title
	}

	set title(title: string) {
		this._title = title
	}


	get done(): boolean {
		return this._done
	}

	set done(done: boolean) {
		this._done = done
	}
}