import { Subject } from "rxjs";

//Este subject es un canal de comunicación, vamos a pasar info basicamente
export class SubjectManager {
	subject$ = new Subject();

	getSubject() {
		//Nadie puede enviar información a traves de este metodo gracias a que lo convertimos en observablo
		return this.subject$.asObservable();
	}

	setSubject(value) {
		//Solamente podemos enviar información por este metodo
		this.subject$.next(value);
	}
}
