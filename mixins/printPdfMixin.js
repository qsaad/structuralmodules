import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const printPdfMixin =  {
    data(){
        return{
           
        }
    },//DATA
    created(){
        
    },
    computed:{
       
        
    },
    methods:{
        printPDF(){
            html2canvas(document.getElementById('moduleCalculation'))
                .then((canvas) =>{
                    let imgData = canvas.toDataURL("image/png", 0.5);
                    
                    var pdf = new jsPDF({
                        unit: 'in'
                    })

                    //GRID
                    pdf.setDrawColor('#EEE')
                    pdf.setLineWidth(0.01);
                    //VERTICAL LINES
                    for(let x=0.75;x < 8;x=x+0.25){
                        pdf.line(x, 0.5, x, 10);
                    }
                    //HORIZONTAL LINES
                    for(let y=1.75;y < 10;y=y+0.25){
                        pdf.line(0.5, y, 8.25, y);
                    }   

                    //BORDER
                    pdf.setDrawColor('#000')
                    pdf.setLineWidth(0.05)
                    pdf.rect(0.5, 0.5, 7.5, 10)
                    //HEADER

                    //FOOTER

                    //LOGO

                    //ADD MODULE CALCULATION
                    pdf.addImage(imgData, 'PNG', 1.5, 2);
                    pdf.save("calculation.pdf");
            })
       }//PRINT PDF
    }//METHODS
}//EXPORT