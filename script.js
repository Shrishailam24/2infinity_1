// Signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("/.netlify/functions/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    document.getElementById("msg").innerText = data.message;
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const res = await fetch("/.netlify/functions/approve", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    document.getElementById("loginMsg").innerText = data.message;
  });
}
