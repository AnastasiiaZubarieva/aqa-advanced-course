import { Book } from "./Book.js";

export class EBook extends Book {
    constructor(title, author, year, fileSize) {
        super(title, author, year);
        this.fileSize = fileSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`File Size: ${this.fileSize} MB`);
    }

    // --- Static Method ---
    static createFromBook(bookInstance, fileSize) {
        // Валідація: перевіряємо, чи переданий об'єкт дійсно є екземпляром Book
        if (!(bookInstance instanceof Book)) {
            throw new Error("Перший аргумент має бути екземпляром класу Book");
        }

        // Повертаємо новий об'єкт EBook, використовуючи дані з bookInstance
        return new EBook(
            bookInstance.title,
            bookInstance.author,
            bookInstance.year,
            fileSize
        );
    }

    // --- FileSize ---
    get fileSize() {
        return this._fileSize;
    }

    set fileSize(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Розмір файлу має бути додатним числом (в MB).');
        }
        this._fileSize = value;
    }

    printInfo() {
        super.printInfo();
        console.log(`Розмір файла: ${this.fileSize} MB`);
    }
}