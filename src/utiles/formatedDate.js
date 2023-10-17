function formatDate(date) {
  const d = new Date(date);

  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  const year = d.getFullYear();

  return `${month}-${day}-${year}`;
}

export default formatDate;
