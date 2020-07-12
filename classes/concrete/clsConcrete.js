export default class Concrete {
    constructor({ fc = 3000, Fy = 60 }){
        this.fc = fc
        this.Fy = Fy
        this.Es = 29000

        this.phi_v = 0.75
        this.phi_p = 0.65
        this.phi_brg = 0.6
    }

    Ec(){
        return 57000*Math.pow(this.fc,0.5)
    }

    Es(){
        return 29000000
    }

    n(){
        return this.Es()/this.Ec()
    }

    Fr(){
        return 7.5*Math.pow(this.fc,0.5)
    }

}//CONCRETE CLASS