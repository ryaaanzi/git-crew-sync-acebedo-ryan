function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const regularHours = Math.min(hours, 8);
  const overtimeHours = Math.max(hours - 8, 0);
  const overtimeRate = rate * 1.5;
  return Math.round(regularHours * rate + overtimeHours * overtimeRate);
}

module.exports = { isValidShift, calculatePay };