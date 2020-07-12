import {rebar} from '@/data/concrete/rebar'
import {cmu_4, cmu_6, cmu_8, cmu_10, cmu_12} from '@/data/masonry/sectProp'
import Masonry from '@/classes/masonry/clsMasonry'

export default class Wall extends Masonry {
    constructor({ t = 12, h = 12, rebarSize = "#5", rebarSpa = 32, rebarLocation = 'Center',  fm = 2000, Fy = 60, cover = 1.5, grout = 'Partial' }){
        super({fm, Fy})
        //WALL
        this.thickness = t
        this.t = t - 0.375
        this.h = h * 12
        //REBAR
        this.rebarSize = rebarSize,
        this.rebarSpa = rebarSpa
        this.rebarLocation = rebarLocation
        this.cover = cover
        //GROUT
        this.grout = grout
        //SECTION PROPERTIES
        this.prop = this.getPropData()
        this.An = this.prop.A 
        this.Ix = this.prop.I 
        this.Sx = this.prop.S 
        this.r = this.prop.r
        this.wt = this.prop.wt

        //let n = cmu_4(this.grout,this.rebarSpa)
        console.log(this.getPropData())
    }//CONSTRUCTOR

    getPropData(){
        switch(this.thickness){
            case (4) :
                return cmu_4(this.grout, this.rebarSpa)
            case (6) :
                return cmu_6(this.grout, this.rebarSpa)
            case (8) :
                return cmu_8(this.grout, this.rebarSpa)
            case (10) :
                return cmu_10(this.grout, this.rebarSpa)
            case (12) :
                return cmu_12(this.grout, this.rebarSpa)
        }
    }

    b() {
		return Math.min(6 * this.t, this.rebarSpa, 72);
    }
    
    db(){
        return rebar(this.rebarSize).d
    }

    Ab(){
        return rebar(this.rebarSize).A
    }

	d() {
		if (this.rebarLocation === "Center") {
			return this.t / 2;
		} else {
			return this.t - this.TF - this.cover - this.db() / 2;
		}
    }
    
    rho() {
		return this.Ab() / (this.b() * this.db());
    }
    
    k() {
		let rn = this.rho() * this.n();
		return Math.pow(2 * rn + rn * rn, 0.5) - rn;
    }
    
	kd() {
		return this.k() * this.d()
    }

    k1() {
        let rn = this.rho() * this.n();
        if(this.kd() <= this.TF){
            return 0
        }
        else{
            let num =  rn + Math.pow(this.TF,2)/(2*Math.pow(this.d(),2))
            let denom =  rn + this.TF/this.d()
            return num/denom
        }
    }

    Cf() {
        if(this.grout == 'Partial'){
            if(this.kd() <= this.TF){
                return 0.5*this.Fb()*this.kd()
            }
            else{
                return this.Fb()/2*((2*this.k1()*this.d()-this.TF)/(this.k1()*this.d()))
            } 
        }
        else{
            return 0.5*this.Fb()*this.kd()
        }
    }
    
	j() {
        if(this.grout == 'Partial'){
            if(this.kd() <= this.TF){
                return 1 - this.k() / 3;
            }
            else{
                return 1 - this.k1() / 3;
            }
        }
        else{
            return 1 - this.k() / 3;
        }
	}

	Fb() {
		return 0.45 * this.fm;
	}

	Fs() {
		return 32000;
    }
    
    Mm() {
        if(this.grout == 'Partial'){
            if(this.kd() <= this.TF){
                return ((0.5 *this.Fb() *this.k() *this.j() *this.b() *Math.pow(this.d(), 2)) /12);
            }
            else{
                return this.Cf()*this.b()*this.TF*(this.d()-this.TF/2)
            }
        }
        else{
            return ((0.5 *this.Fb() *this.k() *this.j() *this.b() *Math.pow(this.d(), 2)) /12);
        }
	}

	Ms() {
		return (this.Ab() * this.Fs() * this.j() * this.d()) / 12;
	}

	Ma(){
		return Math.min(this.Mm(), this.Ms())
    }
    

    //-------------------------------------------------------
    //AXIAL
    //-------------------------------------------------------
   
    SR(){
        return this.h/this.r
    }

    Fa(){
        if(this.SR() <= 99){
            return 0.25*this.fm*(1 - Math.pow(this.h/(140*this.r),2))
        }
        else{
            return 0.25*this.fm*Math.pow((70*this.r)/this.h,2)
        }
    }

    Pa(){
        return this.An * this.Fa()
    }

    //-------------------------------------------------------
    //SHEAR
    //-------------------------------------------------------





}//CLASS WALL