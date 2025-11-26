import './index.css'

document.querySelector('#app').innerHTML = `
  <div class="bento-container">
    <div class="bento-grid">
      <!-- Card 1: Low Moisture -->
      <div class="bento-card card-moisture">
        <div class="card-bg" style="background-image: url('./filter_cake.png')"></div>
        <div class="card-content">
          <h2>Low Moisture<br>Content in<br>Filter Cake</h2>
          <div class="card-stats">
            <div class="stat-row">
              <span class="stat-label">Max. Pressure</span>
              <span class="stat-value">≤ 1.6 MPa</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">Moisture Content</span>
              <span class="stat-value">≤10%<sup>[1]</sup></span>
            </div>
          </div>
        </div>
        <div class="moisture-graphic">
            <!-- Simple CSS representation of the graphic in the image -->
            <div class="graphic-bar"></div>
            <div class="graphic-water"></div>
        </div>
      </div>

      <!-- Card 2: Compact Structure -->
      <div class="bento-card card-structure">
        <div class="card-content">
          <h2>Compact<br>Structure</h2>
          <div class="top-view-indicator">
            <span>Top View</span>
            <div class="line"></div>
          </div>
        </div>
        <img src="./machine_structure.png" alt="Machine Structure" class="structure-img" />
      </div>

      <!-- Card 3: 6X Capacity -->
      <div class="bento-card card-capacity">
        <div class="card-content centered">
          <div class="big-number">6X</div>
          <p>Capacity vs. Plate-and-Frame Filter<br>Press (Same Filtration Area)</p>
        </div>
      </div>

      <!-- Card 4: Self-Cleaning -->
      <div class="bento-card card-cloth">
        <div class="card-bg" style="background-image: url('/filter_cloth.png')"></div>
        <div class="card-content">
          <h2>Self-<br>Cleaning<br>Filter Cloth</h2>
        </div>
      </div>

      <!-- Card 5: Advanced Automation -->
      <div class="bento-card card-automation">
        <div class="card-content">
          <h2>Advanced<br>Automation</h2>
        </div>
        <img src="./automation_panel.png" alt="Automation Panel" class="automation-img" />
      </div>
    </div>
  </div>
`

