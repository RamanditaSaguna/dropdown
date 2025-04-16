document.addEventListener('DOMContentLoaded', () => {
    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');
    const kecamatanSelect = document.getElementById('kecamatan');
    const kelurahanSelect = document.getElementById('kelurahan');
    const postalCodeInput = document.getElementById('postalCode');
    const streetAddressTextarea = document.getElementById('streetAddress');
    const addressOutput = document.getElementById('address-output');

    // --- Helper Functions ---

    // Resets a select dropdown to its default state and disables it
    function resetSelect(selectElement, defaultOptionText) {
        selectElement.innerHTML = `<option value="">-- ${defaultOptionText} --</option>`;
        selectElement.disabled = true;
    }

    // Updates the address preview section based on current selections and input
    function updateSelectedAddress() {
        const street = streetAddressTextarea.value.trim();
        const kelurahan = kelurahanSelect.value;
        const kecamatan = kecamatanSelect.value;
        const city = citySelect.value;
        const province = provinceSelect.value;
        const postalCode = postalCodeInput.value;

        let output = "";
        if (street) output += `${street}\n`;
        if (kelurahan) output += `Kel. ${kelurahan}`;
        if (kecamatan) output += `, Kec. ${kecamatan}`;
        if (city) output += `\n${city}`;
        if (province) output += `, ${province}`;
        if (postalCode) output += ` ${postalCode}`;

        addressOutput.textContent = output.trim() || 'Please make your selections above.';
    }

    // --- Initialization ---

    // Populate the Province dropdown on page load
    indonesiaData.forEach(provinceData => {
        const option = document.createElement('option');
        option.value = provinceData.province;
        option.textContent = provinceData.province;
        provinceSelect.appendChild(option);
    });

    // --- Event Listeners ---

    // Province Dropdown Change Event
    provinceSelect.addEventListener('change', () => {
        const selectedProvinceName = provinceSelect.value;
        // Reset subsequent dropdowns and fields
        resetSelect(citySelect, 'Select City/Regency');
        resetSelect(kecamatanSelect, 'Select Kecamatan');
        resetSelect(kelurahanSelect, 'Select Kelurahan');
        postalCodeInput.value = '';
        postalCodeInput.disabled = true;
        streetAddressTextarea.value = ''; // Clear street address too
        updateSelectedAddress();

        // Find the selected province data
        if (selectedProvinceName) {
            const provinceData = indonesiaData.find(p => p.province === selectedProvinceName);
            // Populate the City dropdown if data exists
            if (provinceData && provinceData.cities) {
                provinceData.cities.forEach(cityData => {
                    const option = document.createElement('option');
                    option.value = cityData.name;
                    option.textContent = cityData.name;
                    citySelect.appendChild(option);
                });
                citySelect.disabled = false;
            }
        }
    });

    // City Dropdown Change Event
    citySelect.addEventListener('change', () => {
        const selectedCityName = citySelect.value;
        const selectedProvinceName = provinceSelect.value;
        // Reset subsequent dropdowns and fields
        resetSelect(kecamatanSelect, 'Select Kecamatan');
        resetSelect(kelurahanSelect, 'Select Kelurahan');
        postalCodeInput.value = '';
        postalCodeInput.disabled = true;
        streetAddressTextarea.value = '';
        updateSelectedAddress();

        // Find the selected city data
        if (selectedCityName && selectedProvinceName) {
            const provinceData = indonesiaData.find(p => p.province === selectedProvinceName);
            const cityData = provinceData?.cities.find(c => c.name === selectedCityName);

            // Populate the Kecamatan dropdown if data exists
            if (cityData && cityData.kecamatan && cityData.kecamatan.length > 0) {
                cityData.kecamatan.forEach(kecamatanData => {
                    const option = document.createElement('option');
                    option.value = kecamatanData.name;
                    option.textContent = kecamatanData.name;
                    kecamatanSelect.appendChild(option);
                });
                kecamatanSelect.disabled = false;
            } else {
                 // If no Kecamatan data, maybe enable street address directly? Or handle differently.
                 // For now, it stays disabled if no kecamatan data exists.
                 console.warn(`No Kecamatan data found for ${selectedCityName}, ${selectedProvinceName}`);
            }
        }
    });

    // Kecamatan Dropdown Change Event
    kecamatanSelect.addEventListener('change', () => {
        const selectedKecamatanName = kecamatanSelect.value;
        const selectedCityName = citySelect.value;
        const selectedProvinceName = provinceSelect.value;
        resetSelect(kelurahanSelect, 'Select Kelurahan');
        postalCodeInput.value = '';
        postalCodeInput.disabled = true;
        streetAddressTextarea.value = '';
        updateSelectedAddress();

        // Find the selected kecamatan data
        if (selectedKecamatanName && selectedCityName && selectedProvinceName) {
            const provinceData = indonesiaData.find(p => p.province === selectedProvinceName);
            const cityData = provinceData?.cities.find(c => c.name === selectedCityName);
            const kecamatanData = cityData?.kecamatan.find(k => k.name === selectedKecamatanName);

            // Populate the Kelurahan dropdown if data exists
            if (kecamatanData && kecamatanData.kelurahan && kecamatanData.kelurahan.length > 0) {
                kecamatanData.kelurahan.forEach(kelurahanData => {
                    const option = document.createElement('option');
                    // Store postal code in a data attribute for easy retrieval
                    option.value = kelurahanData.name;
                    option.textContent = kelurahanData.name;
                    option.dataset.postalCode = kelurahanData.postalCode; // Store postal code here
                    kelurahanSelect.appendChild(option);
                });
                kelurahanSelect.disabled = false;
            } else {
                 console.warn(`No Kelurahan data found for ${selectedKecamatanName}`);
            }
        }
    });

     // Kelurahan Dropdown Change Event
    kelurahanSelect.addEventListener('change', (event) => {
        postalCodeInput.value = '';
        postalCodeInput.disabled = true;
        // Disable street address until a kelurahan is selected
        streetAddressTextarea.value = ''; // Clear street address when kelurahan changes
        streetAddressTextarea.disabled = true; // Keep disabled until a valid selection

        const selectedOption = event.target.selectedOptions[0];
        // If a valid Kelurahan is selected, populate postal code and enable street address
        if (selectedOption && selectedOption.value) {
            const postalCode = selectedOption.dataset.postalCode;
            if (postalCode) {
                postalCodeInput.value = postalCode;
                postalCodeInput.disabled = false; // Visually enable, though it's readonly
                streetAddressTextarea.disabled = false; // Enable street address input
            }
        }
        updateSelectedAddress();
    });

    // Street Address Textarea Input Event
    streetAddressTextarea.addEventListener('input', updateSelectedAddress);

    // --- Initial Setup ---
    // Initial call to set the default message in the preview
    updateSelectedAddress();
    // Ensure street address is disabled on load
    streetAddressTextarea.disabled = true;
});
