let sum = 0;

while (true) {
  const x = +prompt("sayı gir");
  if (x > 0) {
    sum = sum + x;
    console.log("toplam= " + sum);
  } else {
    console.log("döngüden çıkıldı son toplam " + sum);
    break;
  }
}
