export async function login({ username, password }) {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      if (username === "username" && password === "password") resolve();
      else reject("The username or password is incorrect");
    }, 1000)
  );
}
