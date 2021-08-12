# ChartsApp

Project using ng2-charts library to display bar charts, doughnut charts, etc.

## Installation

- clone
- npm i (watch out dependency conflicts between ng2-Charts and angular CLI version)
- install json-server to provide data for 'doughnut http' component (npm i -g json-server --save; open terminal on src/db; run command 'json-server --watch db.json')

### ⚠ THERE WAS A DEPENDENCY CONFLICT WITH ng2-charts. FIXED INSTALLING THIS VERSIONS OF THE PACKAGE -->

- npm install chart.js@2.9.3 --save
- npm install ng2-charts@2.2.3 --save