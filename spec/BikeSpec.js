describe ("Bike", function(){
  var bike
  beforeEach(function(){
    bike = new Bike()
  })

  it ("should initialize with a working bike", function(){
    expect(bike.working).toEqual(true)
  })
})
