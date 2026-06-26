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

function renderBooks(data){

    const container = document.getElementById("container");

    const years = [...new Set(data.map(book => book.Year))];

    container.innerHTML = "";

    years.forEach(year=>{

        const yearBooks = data.filter(book => book.Year === year);

        let html = `
        <div class="year-section">

            <h2 class="year-title">${year}</h2>

            <div class="book-grid">
        `;

        yearBooks.forEach(book=>{

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

        container.innerHTML += html;

    });

}

loadBooks();