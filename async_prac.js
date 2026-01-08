console.log("fetching user data from database...");
// let user;
// setTimeout(() => {
//     user={name:"Raj",email:"raj@example.com" }
//     console.log("user is fetched");
// }, 0);
// console.log(user);

console.log("first task");
Promise.resolve().then(() => console.log("second task"));
console.log("third task");

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}


async function fetchData() {
  try {
    console.log("Fetching data...");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error("Error:", error.message);

  } finally {
    console.log("Fetch attempt completed");
  }
}

fetchData();

const getUserData = async () => {
    try {
        const user = await fetchuser(4);
        console.log("user data:", user);
    } catch (error) {
        console.log("error:", error);
    }

};
getUserData();