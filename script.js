let items = ["olma", "Banan", "gilos", "shaftoli"];

console.log("Arrayning uzunligi: " + items.length);
alert("Arrayning uzunligi: " + items.length);

let confirmation = confirm("sizning arrayingizdan malumotlarni olib tashlamoqchimiz");

if (confirmation) {
    items.pop();
    console.log("", items);
    alert("Arrayning uzunligi:" + items.length);
} else {
    console.log("Arrayning uzunligi:", items);
    alert("Arrayning uzunligi:" + items.length);
}