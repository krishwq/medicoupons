async function loadBooks() {
    const response = await fetch("books.xlsx");
    const arrayBuffer = await response.arrayBuffer();

    const workbook = XLSX.read(arrayBuffer, {
        type: "array"
    });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const books = XLSX.utils.sheet_to_json(worksheet);

    renderBooks(books);
}

function renderBooks(data) {

    const container = document.getElementById("container");

    const years = [...new Set(data.map(book => book.Year))];

    let html = "";

    years.forEach(year => {

        const yearBooks = data.filter(book => book.Year === year);

        html += `
        <div class="year-section">

            <h2 class="year-title">${year}</h2>
            <p class="year-subtitle">Starting MBBS can feel overwhelming, but every doctor has been where you are today. With the right textbooks for Anatomy, Physiology, and Biochemistry—the foundation of your medical journey—you'll build the knowledge and confidence needed to excel throughout medical school.</p>
        `;

        const subjects = [...new Set(yearBooks.map(book => book.Subject))];

        subjects.forEach(subject => {

            // Filter only books of the current year
            const subjectBooks = yearBooks.filter(book => book.Subject === subject);

            html += `
            <div class="subject-section">

                <h3 class="subject-title">${subject}</h3>

                <div class="book-grid">
            `;

            subjectBooks.forEach(book => {

                html += `
                <div class="book-card">

                    <img src="${book["Image URL"]}" alt="${book["Book Name"]}">

                    <div class="book-content">

                        <h3>${book["Book Name"]}</h3>

                        <p>by <span class="author">${book["Author"]}</span></p>

                        <p>${book.Description}</p>

                        <a href="${book["Purchase URL"]}" target="_blank" class="amazon-btn">
                            Buy on Amazon
                        </a>

                    </div>

                </div>
                `;
            });

            html += `
                </div>
            </div>
            `;
        });

        html += `
        </div>
        `;
    });

    container.innerHTML = html;
}

loadBooks();