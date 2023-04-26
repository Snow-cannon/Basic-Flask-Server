const num1 = 2;
const num2 = 3;

const request = fetch(`/add?a=${num1}&b=${num2}`);

if(request.ok){
    const data = await request.json();
    console.log(data);
} else {
    console.error(`There was an error: ${request}`);
}