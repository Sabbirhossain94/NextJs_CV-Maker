// import { useState, useEffect } from "react";
// import ReactDOMServer from 'react-dom/server';
// import Template from "../pages/Template";
// import pdf from 'html-pdf';

// function PDFGenerator() {
//     // const [htmlContent, setHtmlContent] = useState('');

//     useEffect(() => {
//         const html = ReactDOMServer.renderToString(<Template />);
//         // setHtmlContent(html);
//         console.log(html)
//     }, []);

//     // useEffect(() => {
//     //     if (htmlContent) {
//     //         generatePDF(htmlContent);
//     //     }
//     // }, [htmlContent]);

//     return null;
// };

// // const generatePDF = (htmlContent) => {
// //     pdf.create(htmlContent).toBuffer((err, buffer) => {
// //         if (err) {
// //             console.error('Error generating PDF:', err);
// //         } else {
// //             const blob = new Blob([buffer], { type: 'application/pdf' });
// //             const url = window.URL.createObjectURL(blob);
// //             const a = document.createElement('a');
// //             a.href = url;
// //             a.download = 'cv.pdf';
// //             a.click();
// //             window.URL.revokeObjectURL(url);
// //         }
// //     });
// // };



// export default PDFGenerator;