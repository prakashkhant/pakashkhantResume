// =========================
// script.js
// =========================

function downloadPDF(){

    const resume = document.querySelector(".resume");

    // CHANGE TO PRINT MODE

    resume.classList.remove("web-mode");

    resume.classList.add("print-mode");

    const options = {

        margin:0,

        filename:'prakashkumar-khant-resume.pdf',

        image:{
            type:'jpeg',
            quality:1
        },

        html2canvas:{
            scale:2,
            scrollY:0,
            useCORS:true
        },

        jsPDF:{
            unit:'mm',
            format:'a4',
            orientation:'portrait'
        },

        pagebreak:{
            mode:['avoid-all']
        }
    };

    html2pdf()
    .set(options)
    .from(resume)
    .save()
    .then(()=>{

        // BACK TO WEB MODE

        resume.classList.remove("print-mode");

        resume.classList.add("web-mode");

    });
}