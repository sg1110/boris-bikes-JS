function DockingStation () {
  this.bikes_docked = []
}

DockingStation.prototype.release_bike = function () {
  this.bikes_docked.pop();
}

DockingStation.prototype.add_bike = function(bike) {
  this.bikes_docked.push(bike)
 }
