const prescriptions = {
    "headache": "Using a cold compress may help reduce your headache symptoms.",
    "fever": " Your body needs energy to fight off the infection causing the fever",
    "Body Pain": "Rest and elevate the painful area. Alternate between ice packs to reduce inflammation and heat to improve blood flow",
    "Heart attack": "Medications to treat a heart attack may include aspirin, clot busters, blood-thinning medicines, nitroglycerin, morphine, beta blockers, blood pressure medicines, and statins.",
    "asthma": "Asthma treatment typically involves a combination of medications and lifestyle adjustments to manage symptoms and prevent flare-ups. Here are some common treatment options: "
};

function searchPrescription() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = '';
    
    if (input.length === 0) {
        return;
    }
    
    const result = prescriptions[input];
    
    if (result) {
        resultsDiv.innerHTML = `<div class="result-item">${result}</div>`;
    } else {
        resultsDiv.innerHTML = '<div class="result-item">No prescription information found for this medication.</div>';
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    searchPrescription();
}
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const products = document.querySelectorAll('.product');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});
document.querySelectorAll('.more-button').forEach(button => {
    button.addEventListener('click', function() {
        const medicineItem = this.parentElement;
        const moreInfo = medicineItem.querySelector('.more-info');
        
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            this.textContent = 'Less';
            medicineItem.classList.add('show-more');
        } else {
            moreInfo.classList.add('hidden');
            this.textContent = 'More';
            medicineItem.classList.remove('show-more');
        }
    });
});
