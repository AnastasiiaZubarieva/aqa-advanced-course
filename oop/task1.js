import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book("Кобзар", "Т. Шевченко", 1840);
book1.printInfo();
const book2 = new Book("Енеїда", "І. Котляревський", 1842);
book2.printInfo();

console.log("--------------------------------------------------");

const ebook1 = new EBook("Танець недоумка", "І. Павлюк", 2019, 2.5);
ebook1.printInfo();
const ebook2 = new EBook("Кубик", "С. Козлов", 2024, 3.2);
ebook2.printInfo();

console.log("--------------------------------------------------");


// Формуємо масив із книг обох типів
const booksArray = [book1, book2, ebook1, ebook2];

// Викликаємо статичний метод класу Book
const oldestBook = Book.getOldestBook(booksArray);

console.log("--- Найдавніша книга ---");
oldestBook.printInfo();

console.log("--------------------------------------------------");
// Створюємо звичайну книгу (Book)
const paperBook = new Book("Kobzar", "Taras Shevchenko", 1840);

// Створюємо EBook з об'єкта Book за допомогою статичного методу
const ebookFromPaper = EBook.createFromBook(paperBook, 3.8);

// Перевіряємо створену електронну книгу
ebookFromPaper.printInfo();

console.log(ebookFromPaper instanceof EBook);