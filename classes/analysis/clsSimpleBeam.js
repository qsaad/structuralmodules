export default class SimpleBeam{
    constructor({ L = 22, w = 1, E = 29000, Ix = 100 }) {
		this.L = L;
		this.w = w;
		this.E = E;
		this.Ix = Ix;
	} //CONSTRUCTOR
	//--------------------------------------//
	//LENGTH
	//--------------------------------------//
	Li() {
		return [...Array.from({ length: this.L / 0.5 }, (x, i) => i * 0.5), this.L];
	}

	//--------------------------------------//
	//FLEXURE
	//--------------------------------------//
	M(){
		return ((this.w * this.L * this.L) / 8)
	}

	Mi() {
		let Lx = this.Li();
		let arr = [];

		Lx.forEach((x, i) => {
			arr[i] = ((this.w * x) / 2) * (this.L - x);
		});

		return arr;
	}

	plotM() {
		let Lx = this.Li();
		let Mx = this.Mi();
		let arr = [];

		Lx.forEach((x, i) => {
			arr[i] = { x: x, y: Mx[i] };
		});

		return arr;
	} //PLOT M

	//--------------------------------------//
	//SHEAR
	//--------------------------------------//
	V(){
		return (this.w * this.L) / 2
	}

	Vi() {
		let Lx = this.Li();
		let arr = [];

		Lx.forEach((x, i) => {
			arr[i] = this.w * (this.L / 2 - x);
		});

		return arr;
	}

	plotV() {
		let Lx = this.Li();
		let Vx = this.Vi();
		let arr = [];

		Lx.forEach((x, i) => {
			arr[i] = { x: x, y: Vx[i] };
		});

		return arr;
	} // PLOT V

	//--------------------------------------//
	//DEFLECTION
	//--------------------------------------//
	D(){
		return (5 * this.w * Math.pow(this.L, 4) * 1728) / (384 * this.E * this.Ix)
	}

	Di() {
		let Lx = this.Li();
		let arr = [];

		Lx.forEach((x, i) => {
			arr[i] = ((this.w * x * 1728) / (24 * this.E * this.Ix)) * (Math.pow(this.L, 3) - 2 * this.L * Math.pow(x, 2) + Math.pow(x, 3));
		});

		return arr;
	}

	plotD() {
		let Lx = this.Li();
		let Dx = this.Di();
		let arr = [];

		Lx.forEach((x, i) => {
			arr[i] = { x: x, y: Dx[i] };
		});

		return arr;
	} // PLOT D
} //CLASS