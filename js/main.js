// F1 League Stats - Main JavaScript
// Handles all dashboard interactivity and data rendering

document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

/**
 * Initialize the dashboard on page load
 */
function initializeDashboard() {
    setupNavigation();
    setupModalClose();
    renderAllData();
}

/**
 * Setup navigation tab functionality
 */
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            switchSection(category);
        });
    });
}

/**
 * Setup modal close functionality
 */
function setupModalClose() {
    const modal = document.getElementById('driverModal');
    const closeBtn = modal.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

/**
 * Close the modal
 */
function closeModal() {
    const modal = document.getElementById('driverModal');
    modal.classList.remove('show');
}

/**
 * Open driver detail modal
 */
function openDriverModal(driverId) {
    const driver = leagueData.drivers.find(d => d.id === driverId);
    if (!driver) return;
    
    const modal = document.getElementById('driverModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = generateDriverDetailHTML(driver);
    modal.classList.add('show');
}

/**
 * Generate driver detail HTML
 */
function generateDriverDetailHTML(driver) {
    let html = `
        <div class="modal-header">
            <div class="modal-header-info">
                <div class="modal-driver-number">${driver.number}</div>
                <div class="modal-driver-title">
                    <div class="modal-driver-name">${driver.name}</div>
                    <div class="modal-driver-team">${driver.team}</div>
                    <span class="modal-driver-category">${driver.category}</span>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <div class="modal-bio">${driver.bio}</div>
        </div>

        <div class="modal-section">
            <div class="modal-section-title">📊 Current Season Statistics</div>
            <div class="modal-stats">
                <div class="modal-stat-item">
                    <div class="modal-stat-label">Points</div>
                    <div class="modal-stat-value">${driver.points}</div>
                </div>
                <div class="modal-stat-item">
                    <div class="modal-stat-label">Races</div>
                    <div class="modal-stat-value">${driver.races}</div>
                </div>
                <div class="modal-stat-item">
                    <div class="modal-stat-label">Wins</div>
                    <div class="modal-stat-value">${driver.wins}</div>
                </div>
                <div class="modal-stat-item">
                    <div class="modal-stat-label">Podiums</div>
                    <div class="modal-stat-value">${driver.podiums}</div>
                </div>
            </div>
        </div>
    `;

    // Past Teams Section
    if (driver.pastTeams && driver.pastTeams.length > 0) {
        html += `
            <div class="modal-section">
                <div class="modal-section-title">🏁 Past Teams & Championships</div>
                <div class="past-teams-list">
        `;
        
        driver.pastTeams.forEach(team => {
            html += `
                <div class="past-team-item">
                    <div class="team-year">${team.year}</div>
                    <div class="team-name">${team.team}</div>
                    <div class="team-position">Position: <strong>${team.position}</strong></div>
                    <div class="team-points">${team.points} pts</div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }

    // Race History Section
    if (driver.raceHistory && driver.raceHistory.length > 0) {
        html += `
            <div class="modal-section">
                <div class="modal-section-title">🏆 Race History</div>
                <div class="race-history-list">
        `;
        
        driver.raceHistory.forEach(race => {
            html += `
                <div class="race-history-item">
                    <div>
                        <div class="race-history-name">${race.race}</div>
                        <div class="race-history-date">${formatDate(race.date)}</div>
                    </div>
                    <div class="race-history-position">
                        <strong>#${race.position}</strong>
                    </div>
                    <div class="race-history-points">
                        ${race.points} pts
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }

    return html;
}

/**
 * Switch between sections
 */
function switchSection(category) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Remove active state from all buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected section
    const selectedSection = document.getElementById(category);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Highlight active button
    const activeButton = document.querySelector(`[data-category="${category}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

/**
 * Render all data on page load
 */
function renderAllData() {
    renderF1Data();
    renderF2Data();
    renderF3Data();
    renderDriverProfiles();
    renderChampionships();
}

/**
 * Render F1 Statistics
 */
function renderF1Data() {
    renderRaces('f1', leagueData.f1.races);
    renderWinners('f1', leagueData.f1.races);
    renderStandings('f1', leagueData.f1.standings);
}

/**
 * Render F2 Statistics
 */
function renderF2Data() {
    renderRaces('f2', leagueData.f2.races);
    renderWinners('f2', leagueData.f2.races);
    renderStandings('f2', leagueData.f2.standings);
}

/**
 * Render F3 Statistics
 */
function renderF3Data() {
    renderRaces('f3', leagueData.f3.races);
    renderWinners('f3', leagueData.f3.races);
    renderStandings('f3', leagueData.f3.standings);
}

/**
 * Render races list for a category
 */
function renderRaces(category, races) {
    const container = document.getElementById(`${category}-races`);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (races.length === 0) {
        container.innerHTML = '<p class="placeholder">No races yet</p>';
        return;
    }
    
    races.forEach(race => {
        const raceElement = document.createElement('div');
        raceElement.className = 'race-item';
        raceElement.innerHTML = `
            <div class="race-number">Race #${race.raceNumber}</div>
            <div class="race-name">${race.name}</div>
            <div class="race-details">${race.location} • ${formatDate(race.date)}</div>
            <div class="race-winner">🏆 Winner: ${race.winner}</div>
        `;
        container.appendChild(raceElement);
    });
}

/**
 * Render winners list for a category
 */
function renderWinners(category, races) {
    const container = document.getElementById(`${category}-winners`);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (races.length === 0) {
        container.innerHTML = '<p class="placeholder">No race winners yet</p>';
        return;
    }
    
    const recentWinners = races.slice().reverse().slice(0, 3);
    
    recentWinners.forEach((race, index) => {
        const winnerCard = document.createElement('div');
        winnerCard.className = 'winner-card';
        winnerCard.innerHTML = `
            <div class="winner-position">${getMedalEmoji(index)}</div>
            <div class="winner-name">${race.winner}</div>
            <div class="winner-team">${race.name}</div>
        `;
        container.appendChild(winnerCard);
    });
}

/**
 * Render standings table for a category
 */
function renderStandings(category, standings) {
    const container = document.getElementById(`${category}-standings`);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (standings.length === 0) {
        container.innerHTML = '<p class="placeholder">No standings data yet</p>';
        return;
    }
    
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Pos</th>
                <th>Driver</th>
                <th>Points</th>
                <th>Races</th>
                <th>Wins</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
    
    const tbody = table.querySelector('tbody');
    standings.forEach(standing => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><span class="position-badge">${standing.position}</span></td>
            <td><strong>${standing.driver}</strong></td>
            <td>${standing.points}</td>
            <td>${standing.races}</td>
            <td>${standing.wins}</td>
        `;
        tbody.appendChild(row);
    });
    
    container.appendChild(table);
}

/**
 * Render driver profiles
 */
function renderDriverProfiles() {
    const container = document.getElementById('drivers-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (leagueData.drivers.length === 0) {
        container.innerHTML = '<p class="placeholder">No driver profiles yet</p>';
        return;
    }
    
    leagueData.drivers.forEach(driver => {
        const driverCard = document.createElement('div');
        driverCard.className = 'driver-card';
        driverCard.innerHTML = `
            <div class="driver-number">${driver.number}</div>
            <div class="driver-name">${driver.name}</div>
            <div class="driver-team">${driver.team}</div>
            <span class="driver-category">${driver.category}</span>
            <div class="driver-stats">
                <div class="driver-stat">
                    <div class="stat-label">Points</div>
                    <div class="stat-value">${driver.points}</div>
                </div>
                <div class="driver-stat">
                    <div class="stat-label">Races</div>
                    <div class="stat-value">${driver.races}</div>
                </div>
                <div class="driver-stat">
                    <div class="stat-label">Wins</div>
                    <div class="stat-value">${driver.wins}</div>
                </div>
                <div class="driver-stat">
                    <div class="stat-label">Podiums</div>
                    <div class="stat-value">${driver.podiums}</div>
                </div>
            </div>
        `;
        
        // Add click event to open modal
        driverCard.addEventListener('click', function() {
            openDriverModal(driver.id);
        });
        
        container.appendChild(driverCard);
    });
}

/**
 * Render championship winners
 */
function renderChampionships() {
    const container = document.getElementById('championships-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (leagueData.championships.length === 0) {
        container.innerHTML = '<p class="placeholder">No championship data yet</p>';
        return;
    }
    
    leagueData.championships.forEach(championship => {
        const chCard = document.createElement('div');
        chCard.className = 'championship-card';
        chCard.innerHTML = `
            <div class="championship-year">${championship.year}</div>
            <div class="championship-category">${championship.category}</div>
            <div class="championship-trophy">${championship.trophy}</div>
            <div class="championship-champion">${championship.champion}</div>
            <div class="championship-details">
                <div class="championship-points">${championship.points} points</div>
                <div class="championship-team">${championship.team}</div>
            </div>
        `;
        container.appendChild(chCard);
    });
}

/**
 * Utility function to format dates
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

/**
 * Get medal emoji based on position
 */
function getMedalEmoji(index) {
    const medals = ['🥇', '🥈', '🥉'];
    return medals[index] || '🏁';
}

/**
 * Helper function to update data (for future enhancement)
 */
function updateRaceData(category, newRaces) {
    if (leagueData[category]) {
        leagueData[category].races = newRaces;
        if (category === 'f1') renderF1Data();
        if (category === 'f2') renderF2Data();
        if (category === 'f3') renderF3Data();
    }
}

/**
 * Helper function to add new race
 */
function addNewRace(category, raceData) {
    if (leagueData[category]) {
        leagueData[category].races.push(raceData);
        updateRaceData(category, leagueData[category].races);
    }
}

/**
 * Helper function to add new driver
 */
function addNewDriver(driverData) {
    leagueData.drivers.push(driverData);
    renderDriverProfiles();
}

/**
 * Helper function to add championship
 */
function addChampionship(championshipData) {
    leagueData.championships.push(championshipData);
    renderChampionships();
}

/**
 * Helper function to update driver
 */
function updateDriver(driverId, updatedData) {
    const driver = leagueData.drivers.find(d => d.id === driverId);
    if (driver) {
        Object.assign(driver, updatedData);
        renderDriverProfiles();
    }
}
