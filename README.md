# F1 League Stats 🏎️

A comprehensive statistics dashboard for tracking F1, F2, and F3 League performance including races, winners, standings, driver profiles, and championship records.

## Features

### 📊 Race Categories
- **F1 Stats** - Formula 1 races, winners, and standings
- **F2 Stats** - Formula 2 races, winners, and standings
- **F3 Stats** - Formula 3 races, winners, and standings

### 📈 Dashboard Sections
1. **Races** - Complete race results and details
2. **Winners** - Race winners display
3. **Standings** - Championship points standings
4. **Driver Profiles** - Individual driver information and statistics
5. **Championships** - Championship winners across all categories

## Project Structure

```
F1-stats-/
├── index.html          # Main dashboard
├── css/
│   └── style.css       # Styling
├── js/
│   ├── main.js         # Main functionality
│   └── data.js         # Race and driver data
├── data/
│   ├── f1-races.json   # F1 race data
│   ├── f2-races.json   # F2 race data
│   ├── f3-races.json   # F3 race data
│   ├── drivers.json    # Driver profiles
│   └── championships.json # Championship data
└── README.md           # This file
```

## Data Structure

### Race Data Format
```json
{
  "raceNumber": 1,
  "name": "Race Name",
  "location": "Circuit Location",
  "date": "2024-01-01",
  "winner": "Driver Name",
  "podium": ["1st", "2nd", "3rd"],
  "points": { "1st": 25, "2nd": 18, "3rd": 15 }
}
```

### Driver Profile Format
```json
{
  "id": 1,
  "name": "Driver Name",
  "number": 1,
  "category": "F1",
  "team": "Team Name",
  "points": 100,
  "races": 5,
  "wins": 2,
  "podiums": 4
}
```

### Championship Format
```json
{
  "year": 2024,
  "category": "F1",
  "champion": "Driver Name",
  "points": 500,
  "team": "Team Name"
}
```

## Getting Started

1. Clone the repository
2. Add your race data to the `data/` folder
3. Update driver profiles in `drivers.json`
4. Open `index.html` in your browser
5. Customize styling in `css/style.css`

## Usage

- Navigate between F1, F2, and F3 sections
- View race results and winners
- Check championship standings
- Browse driver profiles
- Track championship history

## License

Open source - Feel free to use and modify

---

**Last Updated:** May 2024
