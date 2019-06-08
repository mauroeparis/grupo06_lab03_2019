export function timeFormat(dateObj) {
  return ("0" + dateObj.getHours()).slice(-2) + ":" + ("0" + dateObj.getMinutes()).slice(-2)
}

export function dateFormat(dateObj) {
  return ("0" + dateObj.getDate()).slice(-2) + "/" + ("0" + (dateObj.getMonth() + 1)).slice(-2);
}
