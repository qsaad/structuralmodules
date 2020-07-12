import {rebar} from '@/data/concrete/rebar'
import Concrete from '@/classes/concrete/clsConcrete'

export default class Beam extends Concrete {
    constructor({ b = 12, h = 24, rebarQty = 2, rebarSize = "#5", fc = 3000, Fy = 60, cover = 1.5, stirrupSize = "#3", stirrupSpa = 12, stirrupLegs = 2, Fyv = 60 }){
        super({fc, Fy})
        this.b = b
        this.h = h
        this.rebarQty = rebarQty
        this.rebarSize = rebarSize,
        this.fc = fc
        this.cover = cover
        this.Fy = Fy * 1000
        this.stirrupSize = stirrupSize
        this.stirrupSpa = stirrupSpa
        this.stirrupLegs = stirrupLegs
        this.Fyv = Fyv
    }//CONSTRUCTOR

    db(){
        return rebar(this.rebarSize).d
    }
    
    Ab(){
        return rebar(this.rebarSize).A
    }

    Ag(){
        return this.b * this.h
    }

    d(){
        return this.h - this.cover - rebar(this.stirrupSize).d - rebar(this.rebarSize).d/2
    }//d

    Ast(){
        return rebar(this.rebarSize).A * this.rebarQty
    }

    Asv(){
        return rebar(this.stirrupSize).A * this.stirrupLegs
    }

    a(){
        return (this.Ast()*this.Fy)/(0.85*this.fc*this.b)
    }//A
      
    beta(){
        return Math.max(0.85-((this.fc-4000)/1000)*0.05,0.65)
    }//BETA
      
    c(){
        return this.a()/this.beta()
    }//C
      
    et(){
        return ((this.d()-this.c())/this.c())*0.003
    }//ET

    phi(){
        return this.et() >= 0.005 ? 0.9 : 0.483 + 83.33*this.et()
    }//PHI
    
    fMn() {
        return this.phi()*this.Ast()*this.Fy*(this.d()-this.a()/2)/12000
        
    }// FLEXURAL CAPACITY

    Vc(){
        return 2*Math.pow(this.fc,0.5)*this.b* this.d()/1000
    }//CONCRETE SHEAR CAPACITY

    Vs(){
        return Math.min(this.Asv()*(this.Fyv/1000)*this.d()/this.stirrupSpa, 8*Math.pow(this.fc,0.5)*this.b*this.d())
    }//STIRRUP SHEAR CAPACITY

    fVn(){
        return this.phi_v*(this.Vc() + this.Vs())
    }//NOMINAL ONE WAY SHEAR CAPACITY

    

}//CLASS BEAM
