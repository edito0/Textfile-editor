window.addEventListener('load', (event) => {
    alert("Data on page will be earse after reload!");
  });

richTextFiled.document.designMode = "On";

function converter(command) {
    richTextFiled.document.execCommand(command, false, null);
}

function converterFont(command, inputValue) {
    richTextFiled.document.execCommand(command, false, inputValue);
}

function converterImage(command) {
    link = prompt("Enter Image link : ", "");
    richTextFiled.document.execCommand(command, false, link);

    const imgs = richTextFiled.document.querySelectorAll("img")[0];
    const requiredWidth = prompt("Enter Width of Image : ", "");

    imgs.style.width = requiredWidth;

}

function converterImageSize() {

    const imgs = richTextFiled.document.querySelectorAll("img")[0];

    const requiredWidth = prompt("Enter Width of Image : ", "");

    imgs.style.width = requiredWidth;

}


function generatePDF() {

    html2pdf(richTextFiled.document.body.innerHTML, {
        margin: 20,
        filename: 'texteditor.pdf',
        image: { type: 'jpg', quality: 0.99 },
        html2canvas: { scale: 2, dpi: 300, },
        jsPDF: { unit: 'px', format: 'a4', orientation: 'portrait' }
    });
    
    // const img = richTextFiled.document.querySelectorAll("img")[0];
    // HtmlToPdf.Options.BaseUrl = `file:///c:/${}`;
    // html2pdf().ConvertHtml(`<img src='${img.src}' >`);

    html2pdf().from(richTextFiled.document.body.innerHTML).save();
}

