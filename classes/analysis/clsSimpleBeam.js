import {sumArrays} from '~/library/mathLib'

export default class SimpleBeam{
    constructor({ L = 22, w = 1, E = 29000, Ix = 100, PL = [], LF = 1 }) {
		this.L = L;
		this.w = w;
		this.E = E;
		this.Ix = Ix;
		this.PL = PL
		this.LF = LF
		this.segment = 0.25
	} //CONSTRUCTOR
	//--------------------------------------//
	//LENGTH
	//--------------------------------------//
	Li() {
		return [...Array.from({ length: this.L /this.segment }, (x, i) => i *this.segment), this.L];
	}

	//--------------------------------------//
	//LEFT REACTION
	//--------------------------------------//

	RL(){
		let RW = this.w*this.L/2
		let RP = this.PL.reduce((total, item) => total + item.P*(this.L-item.a)/this.L, 0)
			
		return (RW + RP)*this.LF
	}

	//--------------------------------------//
	//RIGHT REACTION
	//--------------------------------------//

	RR(){
		let RW = this.w*this.L/2
		let RP = this.PL.reduce((total, item) => total + item.P*item.a/this.L, 0); 
		return (RW + RP)*this.LF
	}

	//--------------------------------------//
	//FLEXURE
	//--------------------------------------//
	M(){
		return Math.max(...this.Mi())
	}

	Mi() {
		let Lx = this.Li();
		let Mw = [];
		let Mp = []

		//MOMENT DUE TO UNIFORM LOAD
		Lx.forEach((x, i) => {
			Mw[i] = ((this.w * this.LF * x) / 2) * (this.L - x) 
		});
		//MOMENT DUE TO POINT LOAD
		Lx.forEach((x, i) => {
			Mp.push(
				this.PL.reduce((total, item) => {
					if(x < item.a ){
						return total + item.P*this.LF*(this.L-item.a)*x/this.L
					}//IF
					else{
						return total + item.P*this.LF*(this.L-item.a)*x/this.L-item.P*(x-item.a)
					}//ELSE
				},0)
			)
		})

		return sumArrays([Mw,Mp]);
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
		return (this.w * this.LF * this.L) / 2
	}

	Vi() {
		let Lx = this.Li();
		let Vw = [];
		let Vp = [];

		//DUE TO UNIFORM LOAD
		Lx.forEach((x, i) => {
			Vw[i] = this.w * this.LF * (this.L / 2 - x);
		});

		//DUE TO POINT LOAD
		let RP = this.PL.reduce((total, item) => total + item.P*(this.L-item.a)/this.L, 0)

		Lx.forEach((x, i) => {
			Vp.push(
				RP - this.PL.reduce((total, item) => {
					if(x <= item.a ){
						return total + 0
					}//IF
					else{
						return total + item.P*this.LF
					}//ELSE
				},0)
			)
		})

		return sumArrays([Vw,Vp]);
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
		//return (5 * this.w * Math.pow(this.L, 4) * 1728) / (384 * this.E * this.Ix)
		return Math.max(...this.Di())
	}

	Di() {
		let Lx = this.Li();
		let Dw = [];
		let Dp = [];

		//DUE TO UNIFORM LOAD
		Lx.forEach((x, i) => {
			Dw[i] = ((this.w * x * 1728) / (24 * this.E * this.Ix)) * (Math.pow(this.L, 3) - 2 * this.L * Math.pow(x, 2) + Math.pow(x, 3));
		});

		//DUE TO POINT LOAD
		Lx.forEach((x, i) => {
			Dp.push(
				this.PL.reduce((total, item) => {
					if(x < item.a ){
						return total + item.P*(this.L-item.a)*x*1728*(Math.pow(this.L,2)-Math.pow(this.L-item.a,2)-Math.pow(x,2))/(6*this.E*this.Ix*this.L)
					}//IF
					else{
						return total + item.P*(this.L-x)*item.a*1728*((2*this.L*x)-Math.pow(x,2)-Math.pow(item.a,2))/(6*this.E*this.Ix*this.L)
					}//ELSE
				},0)
			)
		})

		return sumArrays([Dw,Dp]);
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