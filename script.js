function updateBrand() {
    const brand = document.getElementById('brand-select').value;
    const firma = document.getElementById('firma');
    const logo = document.getElementById('logo');
    const emailField = document.querySelector('.mail');
    const addressField = document.querySelector('.address');
    if (brand === 'duos') {
        firma.textContent = 'Duos Asinos';
        logo.src = 'img/logo-duos.jpg';
        addressField.textContent = 'Bulevar Mihajla Pupina 115v, Beograd, Srbija';
    } else {
        firma.textContent = 'Quadro Consulting';
        logo.src = 'img/logo-quadro.png';
        addressField.textContent = 'Bulevar Mihajla Pupina 115v, Belgrade, Serbia';
    }
    const firstName = document.getElementById('first-name').value.trim().toLowerCase() || 'ime';
    const lastName = document.getElementById('last-name').value.trim().toLowerCase() || 'prezime';
    const domain = brand === 'duos' ? 'duosasinos.com' : 'quadro-consulting.de';
    emailField.textContent = `${firstName}.${lastName}@${domain}`;
}


function previewSignature() {
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const position = document.getElementById('position').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const linkedin = document.getElementById('linkedin').value.trim();
    const emailField = document.querySelector('.mail');
    document.querySelector('.signature-container h2 span:first-child').textContent = firstName || 'Ime';
    document.querySelector('.signature-container h2 span:last-child').textContent = ` ${lastName || 'Prezime'}`;
    const positionField = document.querySelector('.signature-container p:first-of-type');
    if (position) {
        positionField.style.display = 'block'; 
        positionField.querySelector('span').textContent = position;
    } else {
        positionField.style.display = 'none';
    }
    document.querySelector('.signature-container a:first-of-type span').textContent = phone || '+381601234567';

    const firma = document.getElementById('firma').textContent;
    const domain = firma === 'Duos Asinos' ? 'duosasinos.com' : 'quadro-consulting.de';
    emailField.textContent = `${(firstName || 'ime').toLowerCase()}.${(lastName || 'prezime').toLowerCase()}@${domain}`;
    const linkedinButton = document.querySelector('.signature-container a.linkedin-button');
    linkedinButton.href = linkedin || (firma === 'Duos Asinos'
        ? 'https://www.linkedin.com/company/duos-asinos/'
        : 'https://www.linkedin.com/company/quadro-consulting-germany/');
}

function copySignature() {
    const signatureContainer = document.querySelector('.signature');
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(signatureContainer);
    selection.removeAllRanges();
    selection.addRange(range);
    try {
        document.execCommand('copy');
        alert('Signature je kopiran. Sada ga mozete paste-ovati u email.');
    } catch (err) {
        alert('Error');
    }
    selection.removeAllRanges();
}