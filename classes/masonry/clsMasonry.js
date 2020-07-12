export default class Masonry {
    constructor({ fm = 3000, Fy = 60 }){
        this.fm = fm
        this.Fy = Fy
        this.Es = 29000
        this.TF = 1.5
        this.BW = 1.5

        this.phi_v = 0.75
        this.phi_p = 0.65
        this.phi_brg = 0.6
    }

    Em(){
        return 0.9*this.fm
    }


    n(){
        return this.Es/this.Em()
    }

   

}//CONCRETE CLASS