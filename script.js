function demo() {
    const bar = document.getElementById("bar");
    const status = document.getElementById("status");
    const btn = document.getElementById("startBtn");

    // Disable button during scan
    btn.disabled = true;
    bar.style.width = "0%";
    status.innerHTML = "Scanning...";
    status.className = "";

    // Step 1: Scanning
    setTimeout(() => {
        bar.style.width = "35%";
        status.innerHTML = "📡 Analyzing signals...";
    }, 800);

    // Step 2: Analyzing
    setTimeout(() => {
        bar.style.width = "75%";
        status.innerHTML = "🔐 Checking encryption...";
    }, 2200);

    // Step 3: Complete
    setTimeout(() => {
        bar.style.width = "100%";
        status.innerHTML = "✅ Demo Complete!";
        status.className = "success";
        btn.disabled = false;
    }, 4000);
}