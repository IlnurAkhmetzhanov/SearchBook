export const getBooksData = async (bookName:string) => {
    try {
        const rawResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}/`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });



        if (rawResponse.ok) {
            const response = await rawResponse.json();

            return response;
        }
        return false;
    } catch {
        return false;
    }
};

