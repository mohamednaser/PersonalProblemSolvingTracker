function bonAppetit(bill, k, b) {
  var totalSharedCost = 0;
  var personAfterSharedAmount = 0;

  for (var i = 0; i < bill.length; i++) {
    if (k == i) {
      continue;
    } else {
      totalSharedCost += bill[i];
    }
  }

  var personAfterSharedAmount = totalSharedCost / 2;

  var banShouldPay = b - personAfterSharedAmount;

  if (banShouldPay) {
    return "Bon Appetit";
  } else {
    return banShouldPay;
  }
}

console.log(bonAppetit(4, [3, 10, 2, 9], 12));
