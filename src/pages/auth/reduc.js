let array = [
  { id: 1, nama: "1", tgl: "A" },
  { id: 2, nama: "2", tgl: "A" },
  { id: 3, nama: "3", tgl: "B" },
  { id: 4, nama: "4", tgl: "B" },
  { id: 5, nama: "5", tgl: "C" },
  { id: 6, nama: "6", tgl: "C" },
  { id: 7, nama: "7", tgl: "A" },
  { id: 8, nama: "8", tgl: "A" },
];

let red = array.reduce((v, e) => {
  let k = v.findIndex((x) => x.tgl == e.tgl);
  if (k == -1) {
    return "a";
  }
});
