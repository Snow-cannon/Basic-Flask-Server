const num1 = 2;
const num2 = 3;

const addRequest = await fetch(`/add?a=${num1}&b=${num2}`);

if (addRequest.ok) {
  const data = await addRequest.json();
  console.log(data);
} else {
  console.error(`There was an error: ${addRequest}`);
}

const subtractRequest = await fetch(`/subtract`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    a: 5,
    b: 4,
  }),
});

if (subtractRequest.ok) {
  const data = await subtractRequest.json();
  console.log(data);
} else {
  console.error(`There was an error: ${subtractRequest}`);
}
