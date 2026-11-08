export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    printInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}`);
    }

// --- Static Method ---
    static getOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            return null;
        }

        // Порівнюємо книги та повертаємо екземпляр із найменшим роком
        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
    
    // --- Title ---
    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Назва книги має бути непорожнім рядком.');
        }
        this._title = value;
    }

    // --- Author ---
    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Ім\'я автора має бути непорожнім рядком.');
        }
        this._author = value;
    }

    // --- Year ---
    get year() {
        return this._year;
    }

    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value !== 'number' || !Number.isInteger(value) || value <= 0 || value > currentYear) {
            throw new Error(`Рік видання має бути коректним цілим числом (від 1 до ${currentYear}).`);
        }
        this._year = value;
    }
}