let quote = 'Some body can write code that a very well designed code machines can understand. Good programmers write code that first humans can understand. – Martin Fowler. Agile Software Design.'

let favouriteQuote = quote.split(' '); // boşluklardan string ifadeyi elemanlarına ayırıp diziye çevirdi.

console.log(favouriteQuote);

console.log(favouriteQuote.length); // dizideki elemanların sayısını verir.

favouriteQuote.pop(); // dizinin son elemanını siler.

console.log(favouriteQuote);

console.log(favouriteQuote.length); // dizideki elemanların sayısını verir.

favouriteQuote.push('Development,', 'ThoughtWorks', 'Inc.'); // tırnak içerisindeki elemanları dizinin en sonuna ekler.

console.log(favouriteQuote);

console.log(favouriteQuote.length); // dizideki elemanların sayısını verir.

favouriteQuote[1] = 'fool'; // dizinin 1 numaralı elemanını tırnak içerisindeki string değer ile değiştirir.

console.log(favouriteQuote);

favouriteQuote.shift(); // dizinin ilk elemanını siler.

console.log(favouriteQuote);

favouriteQuote.unshift('Any'); // tırnak içerisindeki elemanları dizinin en başına ekler.

console.log(favouriteQuote);

favouriteQuote.splice(7, 5, 'computer'); // 7. elemandan başla  5 eleman sil ve sonra tırnak içerisindeki ifadeyi eleman olarak ekle.

console.log(favouriteQuote);

console.log(favouriteQuote.join(' ')); 