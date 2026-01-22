console.log("🎬 Script connected successfully!");

// Example: show an alert when the page loads
window.onload = () => {
  console.log("Welcome to My Broadcast Hub!");
};

// --- Live Status (simulated demo) ---
function setLiveStatus(cardId, isLive) {
  const card = document.getElementById(cardId);
  const status = card.querySelector(".status");
  if (isLive) {
    status.textContent = "🔴 LIVE NOW";
    status.style.color = "#ff0066";
  } else {
    status.textContent = "⚫ OFFLINE";
    status.style.color = "#888";
  }
}


setLiveStatus("youtubeCard", true);
setLiveStatus("twitchCard", false);

// --- Upcoming Shows ---
const upcomingShows = [
  { title: "DJ Night Live", time: "Nov 10, 2025 20:00:00" },
  { title: "Podcast: Voices of Tomorrow", time: "Nov 12, 2025 18:30:00" },
  { title: "Tech Talk: Future of AI", time: "Nov 14, 2025 19:00:00" },
];

const upcomingList = document.getElementById("upcoming-shows");

upcomingShows.forEach(show => {
  const li = document.createElement("li");
  const countdown = document.createElement("div");
  countdown.className = "countdown";

  li.innerHTML = `<strong>${show.title}</strong> — ${new Date(show.time).toLocaleString()}`;
  li.appendChild(countdown);
  upcomingList.appendChild(li);

  // Countdown timer
  const targetTime = new Date(show.time).getTime();
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      countdown.textContent = "🎬 LIVE NOW!";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.textContent = `⏳ Starts in ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
});


