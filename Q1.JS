class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
      this.bookingFee = bookingFee;
    }
  
    calculatePrice(distanceInMiles, timeInMinutes) {
      const distanceCost = distanceInMiles * this.costPerMile;
      const timeCost = timeInMinutes * this.costPerMinute;
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
      return totalPrice;
    }
  
    // Getter methods
    getBaseFare() {
      return this.baseFare;
    }
  
    getCostPerMinute() {
      return this.costPerMinute;
    }
  
    getCostPerMile() {
      return this.costPerMile;
    }
  
    getBookingFee() {
      return this.bookingFee;
    }
  }
  

  const myUberCalculator = new UberPriceCalculator(2.5, 0.3, 1.5, 1.5);
  const distance = 10; // miles
  const time = 20; // minutes
  const totalPrice = myUberCalculator.calculatePrice(distance, time);
  console.log("Total Price:", totalPrice);
  
  