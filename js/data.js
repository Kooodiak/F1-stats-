// F1 League Stats - Sample Data
// Add your actual race, driver, and championship data here

const leagueData = {
    f1: {
        races: [
            {
                raceNumber: 1,
                name: "Bahrain GP",
                location: "Bahrain International Circuit",
                date: "2024-03-02",
                winner: "Max Verstappen",
                podium: ["Max Verstappen", "Lewis Hamilton", "Charles Leclerc"],
                points: { "Max Verstappen": 25, "Lewis Hamilton": 18, "Charles Leclerc": 15 }
            },
            {
                raceNumber: 2,
                name: "Saudi Arabia GP",
                location: "Jeddah Corniche Circuit",
                date: "2024-03-09",
                winner: "Lewis Hamilton",
                podium: ["Lewis Hamilton", "Charles Leclerc", "Carlos Sainz"],
                points: { "Lewis Hamilton": 25, "Charles Leclerc": 18, "Carlos Sainz": 15 }
            },
            {
                raceNumber: 3,
                name: "Australian GP",
                location: "Albert Park",
                date: "2024-03-24",
                winner: "Charles Leclerc",
                podium: ["Charles Leclerc", "Max Verstappen", "Lando Norris"],
                points: { "Charles Leclerc": 25, "Max Verstappen": 18, "Lando Norris": 15 }
            }
        ],
        standings: [
            { position: 1, driver: "Max Verstappen", points: 43, races: 2, wins: 1 },
            { position: 2, driver: "Charles Leclerc", points: 40, races: 2, wins: 1 },
            { position: 3, driver: "Lewis Hamilton", points: 43, races: 2, wins: 1 },
            { position: 4, driver: "Carlos Sainz", points: 15, races: 1, wins: 0 },
            { position: 5, driver: "Lando Norris", points: 15, races: 1, wins: 0 }
        ]
    },
    f2: {
        races: [
            {
                raceNumber: 1,
                name: "Feature Race 1",
                location: "Bahrain International Circuit",
                date: "2024-03-02",
                winner: "Hadjar Khaleel",
                podium: ["Hadjar Khaleel", "Isack Hadjar", "Paul Aron"],
                points: { "Hadjar Khaleel": 25, "Isack Hadjar": 18, "Paul Aron": 15 }
            },
            {
                raceNumber: 2,
                name: "Sprint Race 1",
                location: "Bahrain International Circuit",
                date: "2024-03-02",
                winner: "Paul Aron",
                podium: ["Paul Aron", "Hadjar Khaleel", "Niels Koolen"],
                points: { "Paul Aron": 12, "Hadjar Khaleel": 9, "Niels Koolen": 6 }
            }
        ],
        standings: [
            { position: 1, driver: "Hadjar Khaleel", points: 34, races: 2, wins: 1 },
            { position: 2, driver: "Paul Aron", points: 27, races: 2, wins: 1 },
            { position: 3, driver: "Isack Hadjar", points: 18, races: 1, wins: 0 },
            { position: 4, driver: "Niels Koolen", points: 15, races: 1, wins: 0 },
            { position: 5, driver: "Zane Maloney", points: 12, races: 1, wins: 0 }
        ]
    },
    f3: {
        races: [
            {
                raceNumber: 1,
                name: "Feature Race 1",
                location: "Bahrain International Circuit",
                date: "2024-03-02",
                winner: "Niels Koolen",
                podium: ["Niels Koolen", "Axel Hadjar", "Luke Browning"],
                points: { "Niels Koolen": 25, "Axel Hadjar": 18, "Luke Browning": 15 }
            },
            {
                raceNumber: 2,
                name: "Sprint Race 1",
                location: "Bahrain International Circuit",
                date: "2024-03-02",
                winner: "Axel Hadjar",
                podium: ["Axel Hadjar", "Niels Koolen", "Mari Boya"],
                points: { "Axel Hadjar": 12, "Niels Koolen": 9, "Mari Boya": 6 }
            }
        ],
        standings: [
            { position: 1, driver: "Niels Koolen", points: 34, races: 2, wins: 1 },
            { position: 2, driver: "Axel Hadjar", points: 30, races: 2, wins: 1 },
            { position: 3, driver: "Luke Browning", points: 15, races: 1, wins: 0 },
            { position: 4, driver: "Mari Boya", points: 15, races: 1, wins: 0 },
            { position: 5, driver: "Hadrien David", points: 12, races: 1, wins: 0 }
        ]
    },
    drivers: [
        {
            id: 1,
            name: "Max Verstappen",
            number: 1,
            category: "F1",
            team: "Red Bull Racing",
            points: 43,
            races: 2,
            wins: 1,
            podiums: 2,
            bio: "Dutch racing driver known for exceptional car control and aggressive driving style.",
            pastTeams: [
                { year: 2023, team: "Red Bull Racing", position: 1, points: 575 },
                { year: 2022, team: "Red Bull Racing", position: 1, points: 454 },
                { year: 2021, team: "Red Bull Racing", position: 1, points: 395 }
            ],
            raceHistory: [
                { race: "Bahrain GP", date: "2024-03-02", position: 1, points: 25 },
                { race: "Saudi Arabia GP", date: "2024-03-09", position: 2, points: 18 }
            ]
        },
        {
            id: 2,
            name: "Lewis Hamilton",
            number: 44,
            category: "F1",
            team: "Mercedes",
            points: 43,
            races: 2,
            wins: 1,
            podiums: 2,
            bio: "British racing driver with record number of championship titles and wins.",
            pastTeams: [
                { year: 2023, team: "Mercedes", position: 2, points: 499 },
                { year: 2022, team: "Mercedes", position: 3, points: 378 },
                { year: 2021, team: "Mercedes", position: 2, points: 387 }
            ],
            raceHistory: [
                { race: "Bahrain GP", date: "2024-03-02", position: 2, points: 18 },
                { race: "Saudi Arabia GP", date: "2024-03-09", position: 1, points: 25 }
            ]
        },
        {
            id: 3,
            name: "Charles Leclerc",
            number: 16,
            category: "F1",
            team: "Ferrari",
            points: 40,
            races: 2,
            wins: 1,
            podiums: 2,
            bio: "Monegasque racing driver for the Ferrari team, known for consistency and precision.",
            pastTeams: [
                { year: 2023, team: "Ferrari", position: 3, points: 419 },
                { year: 2022, team: "Ferrari", position: 2, points: 308 },
                { year: 2021, team: "Ferrari", position: 4, points: 217 }
            ],
            raceHistory: [
                { race: "Bahrain GP", date: "2024-03-02", position: 3, points: 15 },
                { race: "Saudi Arabia GP", date: "2024-03-09", position: 2, points: 18 },
                { race: "Australian GP", date: "2024-03-24", position: 1, points: 25 }
            ]
        },
        {
            id: 4,
            name: "Hadjar Khaleel",
            number: 5,
            category: "F2",
            team: "Campos Racing",
            points: 34,
            races: 2,
            wins: 1,
            podiums: 2,
            bio: "Rising star in Formula 2 with impressive consistency and racecraft.",
            pastTeams: [
                { year: 2023, team: "Campos Racing", position: 1, points: 465 },
                { year: 2022, team: "Charouz Racing System", position: 5, points: 198 }
            ],
            raceHistory: [
                { race: "Feature Race 1", date: "2024-03-02", position: 1, points: 25 },
                { race: "Sprint Race 1", date: "2024-03-02", position: 2, points: 9 }
            ]
        },
        {
            id: 5,
            name: "Paul Aron",
            number: 11,
            category: "F2",
            team: "Prema Racing",
            points: 27,
            races: 2,
            wins: 1,
            podiums: 2,
            bio: "Estonian driver showing great promise in the Prema Racing team.",
            pastTeams: [
                { year: 2023, team: "Prema Racing", position: 2, points: 402 },
                { year: 2022, team: "Prema Racing", position: 6, points: 178 }
            ],
            raceHistory: [
                { race: "Feature Race 1", date: "2024-03-02", position: 3, points: 15 },
                { race: "Sprint Race 1", date: "2024-03-02", position: 1, points: 12 }
            ]
        },
        {
            id: 6,
            name: "Niels Koolen",
            number: 4,
            category: "F3",
            team: "Hitech Grand Prix",
            points: 34,
            races: 2,
            wins: 1,
            podiums: 2,
            bio: "Dutch driver competing in Formula 3 with Hitech Grand Prix.",
            pastTeams: [
                { year: 2023, team: "Hitech Grand Prix", position: 1, points: 425 },
                { year: 2022, team: "Prema Racing", position: 4, points: 287 }
            ],
            raceHistory: [
                { race: "Feature Race 1", date: "2024-03-02", position: 1, points: 25 },
                { race: "Sprint Race 1", date: "2024-03-02", position: 2, points: 9 }
            ]
        },
        {
            id: 7,
            name: "Axel Hadjar",
            number: 23,
            category: "F3",
            team: "Prema Racing",
            points: 30,
            races: 2,
            wins: 1,
            podiums: 2,
            bio: "Talented F3 driver with strong performances in wet conditions.",
            pastTeams: [
                { year: 2023, team: "Prema Racing", position: 2, points: 391 },
                { year: 2022, team: "ART Grand Prix", position: 5, points: 264 }
            ],
            raceHistory: [
                { race: "Feature Race 1", date: "2024-03-02", position: 2, points: 18 },
                { race: "Sprint Race 1", date: "2024-03-02", position: 1, points: 12 }
            ]
        }
    ],
    championships: [
        {
            year: 2023,
            category: "F1",
            champion: "Max Verstappen",
            points: 575,
            team: "Red Bull Racing",
            trophy: "🏆"
        },
        {
            year: 2023,
            category: "F2",
            champion: "Hadjar Khaleel",
            points: 465,
            team: "Campos Racing",
            trophy: "🏆"
        },
        {
            year: 2023,
            category: "F3",
            champion: "Niels Koolen",
            points: 425,
            team: "Hitech Grand Prix",
            trophy: "🏆"
        }
    ]
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = leagueData;
}
