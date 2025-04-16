const indonesiaData = [
    {
        province: "DKI Jakarta",
        cities: [
            {
                name: "Jakarta Selatan",
                kecamatan: [
                    {
                        name: "Kebayoran Baru",
                        kelurahan: [
                            { name: "Selong", postalCode: "12110" },
                            { name: "Gunung", postalCode: "12120" },
                            { name: "Kramat Pela", postalCode: "12130" },
                            { name: "Rawa Barat", postalCode: "12180" },
                            { name: "Senayan", postalCode: "10270" } // Note: Sometimes codes cross kecamatan boundaries slightly
                        ]
                    },
                    {
                        name: "Cilandak",
                        kelurahan: [
                            { name: "Cipete Selatan", postalCode: "12410" },
                            { name: "Gandaria Selatan", postalCode: "12420" },
                            { name: "Cilandak Barat", postalCode: "12430" },
                            { name: "Lebak Bulus", postalCode: "12440" },
                            { name: "Pondok Labu", postalCode: "12450" }
                        ]
                    },
                    {
                        name: "Pasar Minggu",
                        kelurahan: [
                            { name: "Pejaten Barat", postalCode: "12510" },
                            { name: "Pejaten Timur", postalCode: "12510" }, // Shared code example
                            { name: "Pasar Minggu", postalCode: "12520" },
                            { name: "Kebagusan", postalCode: "12520" }, // Shared code example
                            { name: "Jati Padang", postalCode: "12540" },
                            { name: "Ragunan", postalCode: "12550" },
                            { name: "Cilandak Timur", postalCode: "12560" }
                        ]
                    }
                ]
            },
            {
                name: "Jakarta Pusat", // Adding another city example
                kecamatan: [
                    {
                        name: "Gambir",
                        kelurahan: [
                            { name: "Gambir", postalCode: "10110" },
                            { name: "Kebon Kelapa", postalCode: "10120" },
                            { name: "Petojo Utara", postalCode: "10130" },
                            { name: "Duri Pulo", postalCode: "10140" },
                            { name: "Cideng", postalCode: "10150" },
                            { name: "Petojo Selatan", postalCode: "10160" }
                        ]
                    },
                    {
                        name: "Menteng",
                        kelurahan: [
                            { name: "Menteng", postalCode: "10310" },
                            { name: "Pegangsaan", postalCode: "10320" },
                            { name: "Cikini", postalCode: "10330" },
                            { name: "Kebon Sirih", postalCode: "10340" },
                            { name: "Gondangdia", postalCode: "10350" }
                        ]
                    }
                ]
            }
            // Add other Jakarta cities if needed, following the same structure
        ]
    },
    {
        province: "Jawa Barat",
        cities: [
            {
                name: "Bandung",
                kecamatan: [
                    {
                        name: "Coblong",
                        kelurahan: [
                            { name: "Cipaganti", postalCode: "40131" },
                            { name: "Lebak Siliwangi", postalCode: "40132" },
                            { name: "Sadang Serang", postalCode: "40133" },
                            { name: "Sekeloa", postalCode: "40134" },
                            { name: "Lebak Gede", postalCode: "40135" },
                            { name: "Dago", postalCode: "40135" } // Shared code example
                        ]
                    },
                    {
                        name: "Sukajadi",
                        kelurahan: [
                            { name: "Pasteur", postalCode: "40161" },
                            { name: "Cipedes", postalCode: "40162" },
                            { name: "Sukawarna", postalCode: "40164" },
                            { name: "Sukagalih", postalCode: "40163" },
                            { name: "Sukabungah", postalCode: "40162" } // Shared code example
                        ]
                    }
                ]
            },
            { name: "Bekasi", kecamatan: [] }, // Placeholder - add data if needed
            { name: "Bogor", kecamatan: [] },  // Placeholder
            { name: "Depok", kecamatan: [] }   // Placeholder
        ]
    },
    // Add other provinces if needed, following the same structure
    {
        province: "Jawa Tengah",
        cities: [
            { name: "Semarang", kecamatan: [] }, // Placeholder
            { name: "Surakarta (Solo)", kecamatan: [] }, // Placeholder
            { name: "Magelang", kecamatan: [] } // Placeholder
        ]
    },
    {
        province: "DI Yogyakarta",
        cities: [
            { name: "Yogyakarta", kecamatan: [] }, // Placeholder
            { name: "Sleman", kecamatan: [] }, // Placeholder
            { name: "Bantul", kecamatan: [] } // Placeholder
        ]
    }
];
