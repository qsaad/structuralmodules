import Steel from '@/classes/steel/clsSteel'
import {DataLLBB} from '@/data/steel/DataLLBB' 
import {ArrayMin} from '@/library/mathLib'

export default class CapacityLLBB extends Steel {
    constructor({ method, Fy, shape, Lu, Lx, Ly,Kx = 1, Ky = 1}) {
        super({ method, Fy })
        this.LLBB = DataLLBB.find(item => item.Shape == shape)
        this.c = 1
        this.cb = 1
        this.Lu = Lu*12
        this.Lx = Lx*12
        this.Ly = Ly*12
        this.Kx = Kx
        this.Ky = Ky

        this.A = this.LLBB.A
        this.IX = this.LLBB.IX
        this.IY = this.LLBB.IY
      } // CONSTRUCTOR

      propParams(){
        return {
          A : this.A,
          IX : this.IX,
          IY : this.IY,
        }
      }

    //-----------------------------------------------------------
    //WIDTH-THICKNESS RATIO
    //-----------------------------------------------------------
    
    //-----------------------------------------------------------
    //FLEXURE
    //-----------------------------------------------------------
    fMnx(){
        return 1
    }
    fMny(){
        return 1
    }
    flexureParams(){
		return{
			
		}
	}//FLEXURAL PARAMS
    //-----------------------------------------------------------
    //AXIAL
    //-----------------------------------------------------------
    fPn(){
        return 1
    }
    axialParams(){
		return {
			
		}
	}//AXIAL PARAMS
    //-----------------------------------------------------------
    //SHEAR - X
    //-----------------------------------------------------------
    fVnx(){
        return 1
    }
    //-----------------------------------------------------------
    //SHEAR - Y
    //-----------------------------------------------------------
    fVny(){
        return 1
    }
    shearParams(){
		return{
			A : this.LLBB.A,
			phiV : this.phiV(),
		}
	}//SHEAR PARAMS

    //-----------------------------------------------------------
    //TENSION
    //-----------------------------------------------------------
    fTn(){
        return 1
    }
    tensionParams(){
		return{
			A : this.LLBB.A,
			phiT : this.phiT(),
		}
      }//TENSION PARAMS
      
    //-----------------------------------------------------------
    //TORSION
    //-----------------------------------------------------------
    fTrn(){
        return 1
    }
    torsionParams(){
		return {
			J : this.LLBB.J,
			phiTr : this.phiTr()
		}
      }//TORSION PARAMS
      
    Lp(){
        return 1
    }
    Lr(){
        return 1
    }




}//CLASS