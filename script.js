const elements = [
    { symbol: 'H', number: 1, weight: 1.008 },
    { symbol: 'He', number: 2, weight: 4.0026 },
    { symbol: 'Li', number: 3, weight: 6.94 },
    { symbol: 'Be', number: 4, weight: 9.0122 },
    { symbol: 'B', number: 5, weight: 10.81 },
    { symbol: 'C', number: 6, weight: 12.011 },
    { symbol: 'N', number: 7, weight: 14.007 },
    { symbol: 'O', number: 8, weight: 15.999 },
    { symbol: 'F', number: 9, weight: 18.998 },
    { symbol: 'Ne', number: 10, weight: 20.180 },
    { symbol: 'Na', number: 11, weight: 22.990 },
    { symbol: 'Mg', number: 12, weight: 24.305 },
    { symbol: 'Al', number: 13, weight: 26.982 },
    { symbol: 'Si', number: 14, weight: 28.085 },
    { symbol: 'P', number: 15, weight: 30.974 },
    { symbol: 'S', number: 16, weight: 32.06 },
    { symbol: 'Cl', number: 17, weight: 35.45 },
    { symbol: 'Ar', number: 18, weight: 39.948 },
    { symbol: 'K', number: 19, weight: 39.098 },
    { symbol: 'Ca', number: 20, weight: 40.078 },
    { symbol: 'Sc', number: 21, weight: 44.956 },
    { symbol: 'Ti', number: 22, weight: 47.867 },
    { symbol: 'V', number: 23, weight: 50.942 },
    { symbol: 'Cr', number: 24, weight: 51.996 },
    { symbol: 'Mn', number: 25, weight: 54.938 },
    { symbol: 'Fe', number: 26, weight: 55.845 },
    { symbol: 'Co', number: 27, weight: 58.933 },
    { symbol: 'Ni', number: 28, weight: 58.933 },
    { symbol: 'Cu', number: 29, weight: 63.546 },
    { symbol: 'Zn', number: 30, weight: 65.38 },
    { symbol: 'Ga', number: 31, weight: 69.723 },
    { symbol: 'Ge', number: 32, weight: 72.63 },
    { symbol: 'As', number: 33, weight: 74.922 },
    { symbol: 'Se', number: 34, weight: 78.971 },
    { symbol: 'Br', number: 35, weight: 79.904 },
    { symbol: 'Kr', number: 36, weight: 83.798 },
    { symbol: 'Rb', number: 37, weight: 85.468 },
    { symbol: 'Sr', number: 38, weight: 87.62 },
    { symbol: 'Y', number: 39, weight: 88.906 },
    { symbol: 'Zr', number: 40, weight: 91.224 },
    { symbol: 'Nb', number: 41, weight: 92.906 },
    { symbol: 'Mo', number: 42, weight: 95.95 },
    { symbol: 'Tc', number: 43, weight: 98 },
    { symbol: 'Ru', number: 44, weight: 101.07 },
    { symbol: 'Rh', number: 45, weight: 102.91 },
    { symbol: 'Pd', number: 46, weight: 106.42 },
    { symbol: 'Ag', number: 47, weight: 107.87 },
    { symbol: 'Cd', number: 48, weight: 112.41 },
    { symbol: 'In', number: 49, weight: 114.82 },
    { symbol: 'Sn', number: 50, weight: 118.71 },
    { symbol: 'Sb', number: 51, weight: 121.76 },
    { symbol: 'Te', number: 52, weight: 127.60 },
    { symbol: 'I', number: 53, weight: 126.90 },
    { symbol: 'Xe', number: 54, weight: 131.29 },
    { symbol: 'Cs', number: 55, weight: 132.91 },
    { symbol: 'Ba', number: 56, weight: 137.33 },
    { symbol: 'La', number: 57, weight: 138.91 },
    { symbol: 'Ce', number: 58, weight: 140.12 },
    { symbol: 'Pr', number: 59, weight: 140.91 },
    { symbol: 'Nd', number: 60, weight: 144.24 },
    { symbol: 'Pm', number: 61, weight: 145 },
    { symbol: 'Sm', number: 62, weight: 150.36 },
    { symbol: 'Eu', number: 63, weight: 151.96 },
    { symbol: 'Gd', number: 64, weight: 157.25 },
    { symbol: 'Tb', number: 65, weight: 158.93 },
    { symbol: 'Dy', number: 66, weight: 162.50 },
    { symbol: 'Ho', number: 67, weight: 164.93 },
    { symbol: 'Er', number: 68, weight: 167.26 },
    { symbol: 'Tm', number: 69, weight: 168.93 },
    { symbol: 'Yb', number: 70, weight: 173.04 },
    { symbol: 'Lu', number: 71, weight: 174.97 },
    { symbol: 'Hf', number: 72, weight: 178.49 },
    { symbol: 'Ta', number: 73, weight: 180.95 },
    { symbol: 'W', number: 74, weight: 183.84 },
    { symbol: 'Re', number: 75, weight: 186.21 },
    { symbol: 'Os', number: 76, weight: 190.23 },
    { symbol: 'Ir', number: 77, weight: 192.22 },
    { symbol: 'Pt', number: 78, weight: 195.08 },
    { symbol: 'Au', number: 79, weight: 196.97 },
    { symbol: 'Hg', number: 80, weight: 200.59 },
    { symbol: 'Tl', number: 81, weight: 204.38 },
    { symbol: 'Pb', number: 82, weight: 207.2 },
    { symbol: 'Bi', number: 83, weight: 209.0 },
    { symbol: 'Po', number: 84, weight: 209.0 },
    { symbol: 'At', number: 85, weight: 210 },
    { symbol: 'Rn', number: 86, weight: 222.0 },
    { symbol: 'Fr', number: 87, weight: 223 },
    { symbol: 'Ra', number: 88, weight: 226.0 },
    { symbol: 'Ac', number: 89, weight: 227.0 },
    { symbol: 'Th', number: 90, weight: 232.04 },
    { symbol: 'Pa', number: 91, weight: 231.04 },
    { symbol: 'U', number: 92, weight: 238.03 },
    { symbol: 'Np', number: 93, weight: 237.048 },
    { symbol: 'Pu', number: 94, weight: 244.06 },
    { symbol: 'Am', number: 95, weight: 243.06 },
    { symbol: 'Cm', number: 96, weight: 247.07 },
    { symbol: 'Bk', number: 97, weight: 247.07 },
    { symbol: 'Cf', number: 98, weight: 251.08 },
    { symbol: 'Es', number: 99, weight: 252.08 },
    { symbol: 'Fm', number: 100, weight: 257.10 },
    { symbol: 'Md', number: 101, weight: 258.10 },
    { symbol: 'No', number: 102, weight: 259.10 },
    { symbol: 'Lr', number: 103, weight: 266.12 },
    { symbol: 'Rf', number: 104, weight: 267.12 },
    { symbol: 'Db', number: 105, weight: 270.13 },
    { symbol: 'Sg', number: 106, weight: 271.13 },
    { symbol: 'Bh', number: 107, weight: 270.13 },
    { symbol: 'Hs', number: 108, weight: 277.15 },
    { symbol: 'Mt', number: 109, weight: 276.15 },
    { symbol: 'Ds', number: 110, weight: 281.16 },
    { symbol: 'Rg', number: 111, weight: 282.17 },
    { symbol: 'Cn', number: 112, weight: 285.18 },
    { symbol: 'Nh', number: 113, weight: 286.18 },
    { symbol: 'Fl', number: 114, weight: 289.19 },
    { symbol: 'Mc', number: 115, weight: 290.19 },
    { symbol: 'Lv', number: 116, weight: 293.20 },
    { symbol: 'Ts', number: 117, weight: 294.20 },
    { symbol: 'Og', number: 118, weight: 294.21 }
];



document.addEventListener('DOMContentLoaded', () => {
    const periodicTable = document.querySelector('.periodic-table');
    const dropZone = document.getElementById('dropZone');
    const confirmButton = document.getElementById('confirmButton');
    const clearButton = document.getElementById('clearButton');
    const resultModal = document.getElementById('resultModal');
    const resultDiv = document.getElementById('result');
    const loading = document.getElementById('loading');
    const closeModal = document.querySelector('.modal .close');

    // Ensure modal is hidden on page load
    resultModal.style.display = 'none';

    // Create element cards and append to periodic table
    elements.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('element-card');
        card.setAttribute('draggable', true);
        card.setAttribute('data-symbol', element.symbol);
        card.setAttribute('data-number', element.number);
        card.setAttribute('data-weight', element.weight);

        card.innerHTML = `
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-number">${element.number}</div>
            <div class="element-weight">${element.weight}</div>
        `;

        card.addEventListener('dragstart', () => {
            card.classList.add('dragging');
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
        });

        periodicTable.appendChild(card);
    });

    // Handle drag over and drop events
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow drop
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        
        const draggedElement = document.querySelector('.dragging');
        if (draggedElement) {
            const newCard = document.createElement('div');
            newCard.classList.add('element-card');
            newCard.setAttribute('data-symbol', draggedElement.getAttribute('data-symbol'));
            newCard.setAttribute('data-number', draggedElement.getAttribute('data-number'));
            newCard.setAttribute('data-weight', draggedElement.getAttribute('data-weight'));

            newCard.innerHTML = `
                <div class="element-symbol">${draggedElement.getAttribute('data-symbol')}</div>
                <div class="element-number">${draggedElement.getAttribute('data-number')}</div>
                <div class="element-weight">${draggedElement.getAttribute('data-weight')}</div>
            `;

            const existingCards = dropZone.querySelectorAll('.element-card');
            if (existingCards.length === 0) {
                dropZone.innerHTML = ''; // Remove the "Drop here" text if no cards exist
            }

            if (existingCards.length > 0) {
                existingCards[existingCards.length - 1].insertAdjacentHTML('afterend', '<span class="plus-symbol">+</span>');
            }

            dropZone.appendChild(newCard);
        }
    });

    // Handle confirmation button click
    confirmButton.addEventListener('click', () => {
        loading.style.display = 'block'; // Show loading animation

        setTimeout(() => {
            loading.style.display = 'none'; // Hide loading animation

            const cards = dropZone.querySelectorAll('.element-card');
            if (cards.length === 0) {
                resultDiv.textContent = 'No elements added.';
            } else {
                const confirmedElements = Array.from(cards).map(card => {
                    const symbol = card.getAttribute('data-symbol');
                    const number = parseFloat(card.getAttribute('data-number'));
                    const weight = parseFloat(card.getAttribute('data-weight'));
                    return { symbol, number, weight };
                });

                if (confirmedElements.length > 1) {
                    const combinedSymbol = confirmedElements.map(el => el.symbol).join('');
                    const combinedNumber = confirmedElements.reduce((sum, el) => sum + el.number, 0);
                    const combinedWeight = confirmedElements.reduce((sum, el) => sum + el.weight, 0).toFixed(4);

                    resultDiv.innerHTML = `
                    To find the result, you need to add the atomic number of the first element to the atomic number of the second element. Then, you should add the atomic weight of the first element to the atomic weight of the second element. The final result is the sum of these four values combined and the result is: ${confirmedElements.map(el => el.symbol).join(' + ')} = 
                    <span class="highlight">Atomic Number: ${combinedNumber}</span> & 
                    <span class="highlight">Atomic Weight: ${combinedWeight}</span>
                `;
            
            } else {
                    resultDiv.textContent = 'Add at least two elements to see the result.';
                }
            }

            resultModal.style.display = 'block'; // Show the result modal
        }, 1000); // Simulate loading time of 1 second
    });

    // Handle clear button click
    clearButton.addEventListener('click', () => {
        dropZone.innerHTML = '<p>Drop here</p>'; // Reset drop zone
        resultDiv.textContent = ''; // Clear result text
    });

    // Handle close button click
    closeModal.addEventListener('click', () => {
        resultModal.style.display = 'none'; // Hide the result modal
    });

    // Handle clicks outside the modal to close it
    function handleClickOutside(event) {
        if (resultModal.style.display === 'block' && !resultModal.contains(event.target) && !closeModal.contains(event.target)) {
            resultModal.style.display = 'none';
        }
    }

    document.addEventListener('click', handleClickOutside);
});
