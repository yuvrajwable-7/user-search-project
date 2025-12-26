const users = [
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    },
    {
        name: "kiara mehta",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "isha oberoi",
        pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
        bio: "walking through dreams in doc martens ☁️🖤 | late night thinker",
    },
    {
        name: "ojin oklawa",
        pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        bio: "too glam to give a damn 💅 | filter free soul",
    },
    {
        name: "diya bansal",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        bio: "a little chaos, a lot of art 🎨✨ | just vibes",
    },
    {
        name: "tanay rawat",
        pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80",
        bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
    },
    {
        name: "mohit chhabra",
        pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
        bio: "aesthetic overload 📸🖤 | living in lowercase",
    }
];

// 🔹 Render cards
function showUsers(arr) {
    const cardsContainer = document.querySelector(".cards");

    // clear old cards
    cardsContainer.innerHTML = "";

    // if no users found
    if (arr.length === 0) {
        cardsContainer.innerHTML = `<p class="no-result">No users found</p>`;
        return;
    }

    arr.forEach(user => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.className = "bg-img";
        img.src = user.pic;

        const blur = document.createElement("div");
        blur.className = "blurred-layer";
        blur.style.backgroundImage = `url(${user.pic})`;

        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const content = document.createElement("div");
        content.className = "content";

        const h3 = document.createElement("h3");
        h3.innerText = user.name;

        const p = document.createElement("p");
        p.innerText = user.bio;

        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blur);
        card.appendChild(overlay);
        card.appendChild(content);

        cardsContainer.appendChild(card);
    });
}

// 🔹 Initial load
showUsers(users);

// 🔹 Search logic
const input = document.querySelector("input");

input.addEventListener("input", () => {
    const value = input.value.toLowerCase();

    // show all users if input empty
    if (value === "") {
        showUsers(users);
        return;
    }

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(value)
    );

    showUsers(filteredUsers);
});
