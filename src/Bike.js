describe("Docking Station", function() {
  var dockingstation;

  beforeEach(function() {
    dockingstation = new DockingStation();
  })

  it("should release a bike",function(){
    dockingstation.add_bike("bike")
    dockingstation.add_bike("bike2")
    dockingstation.release_bike()
    expect(dockingstation.bikes_docked).toEqual(["bike"])
  });

  it("should dock a bike", function(){
    dockingstation.add_bike("bike3")
    expect(dockingstation.bikes_docked[0]).toEqual("bike3")
  })

})
