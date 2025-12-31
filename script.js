// Sample shayari data (replace with your own)
const shayariList = [
    {
        title: "jate jaye ye malal",
        text: // Sample shayari data (replace with your own)
const shayariList = [
    {
        title: "Power's Shadow",
        text: "Ek thi PM, takht pe baithi, Dil mein darr, chehre pe hasi, Zindagi ki kahani, adhuri si..."
    },
    {
        title: "Dreams of the Throne",
        text: "Sapne the woh, takht ke, Par haqeeqat ne tod diya, Ek thi PM, ab kahani hai..."
    },
    {
        title: "Silent Nights",
        text: "Raaton mein sochti thi woh, Kal ki baat, aaj ki jhalki, Ek thi PM, dil ki baat..."
    },
    {
        title: "Jate-Jate Ye Malaal",
        text: "जाते-जाते ये मलाल रह गया,\nक्या उन्हें भी मोहब्बत थी, ये सवाल रह गया।\nलब खामोश रहे और आँखें सब कह गईं,\nमगर ज़ुबान से न निकला वो हाल रह गया।\nवो मुड़े थे आख़िरी बार हमें देखने को,\nबस उसी एक पल में सारा साल रह गया।\nउम्र भर की चाहत का सिला कुछ यूँ मिला,\nवो तो चले गए, पर उनका ख़याल रह गया।"
    },
    // Add more as needed
];

// Function to display shayari
function displayShayari() {
    const container = document.getElementById('shayariContainer');
    container.innerHTML = '';
    shayariList.forEach(shayari => {
        const card = `
            <div class="col-md-4">
                <div class="card shayari-card">
                    <div class="card-body">
                        <h5 class="card-title">${shayari.title}</h5>
                        <p class="card-text shayari-text">${shayari.text.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to generate random shayari
function generateRandomShayari() {
    const randomIndex = Math.floor(Math.random() * shayariList.length);
    alert(`Random Shayari: ${shayariList[randomIndex].text}`);
}

// Load shayari on page load
document.addEventListener('DOMContentLoaded', displayShayari);"
    },
    {
        title: "Dreams of the Throne",
        text: "Sapne the woh, takht ke, Par haqeeqat ne tod diya, Ek thi PM, ab kahani hai..."
    },
    {
        title: "Silent Nights",
        text: "Raaton mein sochti thi woh, Kal ki baat, aaj ki jhalki, Ek thi PM, dil ki baat..."
    },
    // Add more as needed
];

// Function to display shayari
function displayShayari() {
    const container = document.getElementById('shayariContainer');
    container.innerHTML = '';
    shayariList.forEach(shayari => {
        const card = `
            <div class="col-md-4">
                <div class="card shayari-card">
                    <div class="card-body">
                        <h5 class="card-title">${shayari.title}</h5>
                        <p class="card-text shayari-text">${shayari.text}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to generate random shayari
function generateRandomShayari() {
    const randomIndex = Math.floor(Math.random() * shayariList.length);
    alert(`Random Shayari: ${shayariList[randomIndex].text}`);
}

// Load shayari on page load
document.addEventListener('DOMContentLoaded', displayShayari);
