export default function JsonLd() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://krakenairelectrical.com.au/#business",
        name: "Kraken Air & Electrical",
        description:
            "Professional air conditioning and electrical services in Perth's Northern Suburbs. Licensed HVAC and electrical technician serving Joondalup, Wanneroo, and surrounding areas.",
        url: "https://krakenairelectrical.com.au",
        telephone: "+61400000000",
        email: "info@krakenairelectrical.com.au",
        image: "https://krakenairelectrical.com.au/logo.jpg",
        priceRange: "$$",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Joondalup",
            addressRegion: "WA",
            postalCode: "6027",
            addressCountry: "AU",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: -31.7449,
            longitude: 115.7666,
        },
        areaServed: [
            {
                "@type": "City",
                name: "Joondalup",
            },
            {
                "@type": "City",
                name: "Wanneroo",
            },
            {
                "@type": "City",
                name: "Mindarie",
            },
            {
                "@type": "City",
                name: "Clarkson",
            },
            {
                "@type": "City",
                name: "Butler",
            },
            {
                "@type": "City",
                name: "Alkimos",
            },
        ],
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "17:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "12:00",
            },
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Air Conditioning Installation",
                        description:
                            "Professional installation of split systems and ducted air conditioning.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Air Conditioning Repair",
                        description:
                            "Fast diagnosis and repair of all AC issues. ARC licensed.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Electrical Services",
                        description:
                            "Switchboard upgrades, safety inspections, lighting installation, and electrical repairs.",
                    },
                },
            ],
        },
    };

    const hvacBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        "@id": "https://krakenairelectrical.com.au/#hvac",
        name: "Kraken Air & Electrical - HVAC",
        description: "ARC licensed air conditioning services in Perth Northern Suburbs.",
        parentOrganization: {
            "@id": "https://krakenairelectrical.com.au/#business",
        },
    };

    const electricianSchema = {
        "@context": "https://schema.org",
        "@type": "Electrician",
        "@id": "https://krakenairelectrical.com.au/#electrician",
        name: "Kraken Air & Electrical - Electrical",
        description: "Licensed electrician serving Perth Northern Suburbs.",
        parentOrganization: {
            "@id": "https://krakenairelectrical.com.au/#business",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(hvacBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(electricianSchema),
                }}
            />
        </>
    );
}
