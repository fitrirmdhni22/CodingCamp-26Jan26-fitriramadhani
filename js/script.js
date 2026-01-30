// Fungsi untuk menampilkan pesan sambutan
function welcomeMessage() {
    let userResponse = prompt("Welcome to Fitri Company! What is your name?");

    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    document.getElementById("welcome-speech").innerText = 
        `Hello, ${userResponse}! Welcome to Fitri Company.`;
}

// Panggil fungsi welcomeMessage saat halaman dimuat
window.onload = welcomeMessage;

// Fungsi untuk menampilkan pesan dari form
function showMessage() {
    // Dapatkan nilai input dari form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validasi input
    if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
    }

    // Dapatkan tanggal dan waktu saat ini dalam format Indonesia
    const now = new Date();
    const dateString = now.toLocaleString("id-ID", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short"
    });

    // Buat elemen hasil dengan styling Tailwind CSS
    const resultBox = `
        <div class="bg-gray-100 border border-gray-300 rounded-lg p-6 mt-6 max-w-lg mx-auto shadow-md">
            <p><strong>Current time :</strong> ${dateString}</p>
            <p><strong>Nama :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Pesan :</strong> ${message}</p>
        </div>
    `;

    // Tampilkan hasil di dalam div result
    document.getElementById("result").innerHTML = resultBox;

    // Reset form setelah submit
    document.getElementById("contact-form").reset();

    // Tampilkan alert terima kasih
    alert("Terima kasih " + name + "! Pesanmu sudah kami terima~ ");
}