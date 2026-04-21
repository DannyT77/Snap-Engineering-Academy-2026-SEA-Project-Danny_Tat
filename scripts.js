/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


// This is an array of objects (Manwha/Manga Information)
const titles = [
  {
    title: "Solo Leveling",
    image: "https://m.media-amazon.com/images/I/816hywlmu-L._AC_UF1000,1000_QL80_.jpg",
    author: ["Chugong", "H-goon", "Gi So-Ryeong"],
    genre: ["Action", "Fantasy", "Adventure", "Drama"],
    rating: 9,
    status: "Completed",
    chapters: 200,
    readLink: "https://comix.to/title/0kx0d-eternally-regressing-knight",
    summary: "Sung Jin-Woo starts as an E-rank Hunter — the weakest of the weak — barely surviving low-level dungeons. Everything changes when he discovers a hidden, deadly dungeon and nearly dies inside it. Instead of dying, he awakens a mysterious power: a private quest system only he can see that lets him level up by completing quests and hunting monsters. He goes from the world's weakest hunter to an S-rank, the strongest there is."
  },
  {
    title: "Childhood Friend of the Zenith",
    image: "https://cdn.asurascans.com/asura-images/covers/childhood-friend-of-the-zenith.6c0f26.webp",
    author: ["Ubilam", "Min Yong-ki"],
    genre: ["Action", "Fantasy", "Martial Arts", "Romance"],
    rating: 9,
    status: "Ongoing",
    chapters: 103,
    readLink: "https://comix.to/title/0kxld-childhood-friend-of-the-zenith",
    summary: "Gu Yangcheon spent his life committing evil deeds under the control of the Heavenly Demon. After being captured and dying in regret, he suddenly wakes up in the past — at the moment he first met Wi Seol-Ah, the very person who defeated his master. Now carrying the weight of his past sins, he sets out to live differently and change his fate."
  },
  {
    title: "Magic Emperor",
    image: "https://www.magicemperor.xyz/wp-content/uploads/2022/02/Magic-Emperor-Manga.jpg",
    author: ["Ye Xiao", "Wuer Manhua"],
    genre: ["Action", "Fantasy", "Adventure", "Drama"],
    rating: 8,
    status: "Ongoing",
    chapters: 771,
    readLink: "https://comix.to/title/3j50-magic-emperor",
    summary: "Zhuo Yifan, the most feared Demonic Emperor in the world, is betrayed and killed by his own disciple. His soul reincarnates into the body of a lowly servant named Zhuo Fan, stripped of all his power. Now a mere butler for the declining Luo Family, he uses his centuries of battle wisdom and cunning to crush enemies from the shadows — and claw his way back to the top."
  },
  {
    title: "Eternally Regressing Knight",
    image: "https://preview.redd.it/eternally-regressing-knight-is-this-good-whats-this-about-v0-6l1bbnkwohrd1.png?auto=webp&s=65fa6b340be516ae6d3f5f019e20f9e4f5ef3ee2",
    author: ["Soul Pung", "Lee Hyunmin", "Leean"],
    genre: ["Action", "Fantasy", "Adventure"],
    rating: 10,
    status: "Ongoing",
    chapters: 130,
    readLink: "https://comix.to/title/0kx0d-eternally-regressing-knight",
    summary: "Encrid dreamed of becoming a knight despite everyone telling him he had no talent. He trained relentlessly — and still died with a sword through his neck. But instead of staying dead, he wakes up and relives the same day over and over. Each loop he grows stronger, learning from every failure. Unlike most regression stories, there are no cheat powers here — just pure grind, grit, and a man who refuses to quit."
  },
  {
    title: "Villain to Kill",
    image: "https://cdn.anisearch.com/images/manga/cover/61/61536_600.webp",
    author: ["Fupin"],
    genre: ["Action", "Fantasy", "Drama"],
    rating: 9,
    status: "Ongoing",
    chapters: 229,
    readLink: "https://comix.to/title/2wmn-villain-to-kill",
    summary: "Cassian Lee was a top-tier Psyker — one of the good guys — until he was falsely accused of murder and killed. He wakes up reincarnated in the body of a Korean high school student who is classified as a Villain, someone born with destructive powers. Now stuck as the villain he once hunted, Cassian must master his new abilities, uncover the truth behind his death, and navigate a dangerous underground war between factions."
  },
  {
    title: "Pick Me Up",
    image: "https://preview.redd.it/pick-me-up-infinite-gacha-probably-one-of-the-best-manhwa-v0-7vn5uthjnklc1.jpeg?auto=webp&s=92442e45d9f3e1250fd0de06ad26fed977e8ffdb",
    author: ["Hermod", "REDICE STUDIO"],
    genre: ["Action", "Fantasy", "Adventure", "Comedy"],
    rating: 9,
    status: "Ongoing",
    chapters: 160,
    readLink: "https://comix.to/title/jr55d-pick-me-up",
    summary: "Loki is the fifth-ranked master of the brutally difficult gacha game 'Pick Me Up!' — a game no one has ever cleared. While attempting a dungeon, he loses consciousness and wakes up inside the game itself as a weak 1-star hero named Islat Han. Convinced someone pulled him in on purpose, Loki must now lead novice players and heroes to conquer the 100th floor — without a single loss — to make it back to the real world."
  },
  {
    title: "Star-Embracing Swordmaster",
    image: "https://preview.redd.it/star-embracing-swordmaster-is-there-a-light-novel-to-this-v0-z63xjceq2z1d1.jpeg?auto=webp&s=8bee57a06f76bd68aed1a18395d8a53cf0eabed6",
    author: ["Hong Daeui", "Juno"],
    genre: ["Action", "Fantasy", "Adventure", "Drama"],
    rating: 10,
    status: "Ongoing",
    chapters: 130,
    readLink: "https://comix.to/title/0j5d-star-embracing-swordmaster",
    summary: "Vlad is a destitute orphan from the slums who has always idolized knights. After being struck by mysterious black lightning, he begins hearing a voice from within. One day, a knight bathed in blue moonlight appears and completely changes his life. Armed with a sentient sword that guides him, Vlad rises from the gutter to become a swordsman in service to a powerful noble house — and eventually, much more."
  },
  {
    title: "Killer Peter",
    image: "https://m.media-amazon.com/images/I/71qrQe6zITL._AC_UF1000,1000_QL80_.jpg",
    author: ["Kim Junghyun", "Lim Lina"],
    genre: ["Action", "Crime", "Drama"],
    rating: 9,
    status: "Ongoing",
    chapters: 125,
    readLink: "https://comix.to/title/wk2n-killer-peter",
    summary: "Peter was a legendary assassin for the criminal organization Glory Club. After decades of service, he retired to run a quiet used bookstore — until Glory Club ambushed him and left him for dead. Somehow surviving, Peter finds his body has been reversed to his teenage years. Back in his physical prime but looking like a high school kid, he sets out to settle the score with the organization that betrayed him."
  },
  {
    title: "Return of the Blossoming Blade",
    image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67f2cfd4f4585f001d1b57a5.jpg",
    author: ["Biga", "Lico"],
    genre: ["Action", "Fantasy", "Comedy", "Martial Arts"],
    rating: 10,
    status: "Ongoing",
    chapters: 180,
    readLink: "https://comix.to/title/9nej6-return-of-the-blossoming-blade",
    summary: "Cheongmyeong, the legendary Plum Blossom Sword Saint and one of the greatest warriors in history, dies after slaying the Heavenly Demon in an epic final battle. He is reborn 100 years later as a beggar — with all his memories and skills intact but none of his former strength. Shocked to find his beloved Mount Hua Sect reduced to a joke, he sets out to restore it to glory one stubborn disciple at a time."
  },
  {
    title: "Eleceed",
    image: "https://m.media-amazon.com/images/I/61qJNWCJWSL._UF1000,1000_QL80_.jpg",
    author: ["Son Je-Ho", "ZHENA"],
    genre: ["Action", "Comedy", "Supernatural"],
    rating: 9,
    status: "Ongoing",
    chapters: 370,
    readLink: "https://comix.to/title/xlyyj-eleceed",
    summary: "Jiwoo Seo is a kind-hearted high school student with lightning-fast speed who secretly uses his powers to help people and rescue stray animals. One day he takes in an injured, chubby street cat — who turns out to be Kayden Break, one of the world's most powerful and dangerous Awakeners, hiding in cat form after being ambushed. The two form an unlikely master-apprentice duo and get pulled into the hidden world of Awakened combat."
  },
  {
    title: "Ctrl+Alt+Resign",
    image: "https://i.redd.it/90ba1x8vnjvf1.jpeg",
    author: ["Woo Si-Mok", "Lee Ha-an"],
    genre: ["Romance", "Comedy", "Slice of Life", "Drama"],
    rating: 8,
    status: "Ongoing",
    chapters: 54,
    readLink: "https://comix.to/title/z0yj-ctrlaltresign",
    summary: "Max is a socially anxious developer who prefers to be invisible at work. Joy is the office's social butterfly — outgoing, talented, and impossible to ignore. When Max accidentally sees something on Joy's laptop he was never supposed to see, his peaceful routine gets completely upended. What starts as an awkward workplace situation slowly becomes something neither of them expected."
  },
  {
    title: "Jujutsu Kaisen",
    image: "https://prodimage.images-bn.com/pimages/9781974714803_p0_v2_s600x595.jpg",
    author: ["Gege Akutami"],
    genre: ["Action", "Fantasy", "Supernatural", "Horror"],
    rating: 9,
    status: "Completed",
    chapters: 271,
    readLink: "https://comix.to/title/7nzg-jujutsu-kaisen",
    summary: "Yuji Itadori is a physically gifted high school student who gets pulled into the world of Jujutsu Sorcerers after swallowing a cursed object — the finger of the legendary demon Ryomen Sukuna. Now hosting one of history's most powerful and dangerous curses inside his body, Yuji enrolls at Tokyo Jujutsu High to train as a sorcerer and collect Sukuna's remaining fingers before being executed."
  },
  {
    title: "Haikyu!!",
    image: "https://prodimage.images-bn.com/pimages/9781974747092_p0_v2_s600x595.jpg",
    author: ["Haruichi Furudate"],
    genre: ["Sports", "Comedy", "Drama"],
    rating: 10,
    status: "Completed",
    chapters: 402,
    readLink: "https://comix.to/title/1zv9d-haikyu",
    summary: "Shoyo Hinata is a short kid who fell in love with volleyball after watching a legendary small player dominate on TV. Despite his height being a massive disadvantage, Hinata joins his high school team and ends up partnering with his former rival Kageyama, a genius setter with no teamwork skills. Together, the two form a terrifyingly fast attack combo as they chase their dream of reaching the top of high school volleyball."
  }
];


// ============================================
// STATE — tracks current filter and sort
// ============================================

const container = document.getElementById('card-container');
let currentGenre = 'All';
let ratingAsc = false;

function getFilteredAndSorted() {
  let result = [...titles]; // copy array so original is never modified

  if (currentGenre !== 'All') {
    result = result.filter(manwha => manwha.genre.includes(currentGenre));
  }

  // sort by rating (toggles high-low / low-high)
  result.sort((a, b) => ratingAsc ? a.rating - b.rating : b.rating - a.rating);

  return result;
}

function filterByGenre(genre) {
  currentGenre = genre;

  // update active button styling
  document.querySelectorAll('.filters button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.trim() === genre) {
      btn.classList.add('active');
    }
  });

  showCards();
}

function sortByRating() {
  ratingAsc = !ratingAsc; // toggle between high→low and low→high

  // update button label to show current sort direction
  const ratingBtn = document.getElementById('rating-btn');

  showCards();
}


// ============================================
// RENDER CARDS
// ============================================

function showCards() {
  container.innerHTML = '';

  const filtered = getFilteredAndSorted();

  filtered.forEach((manwha) => {
    const genreTags = manwha.genre.map(g => `<span class="genre-tag">${g}</span>`).join('');
    const statusClass = manwha.status === 'Completed' ? 'completed' : '';

    container.innerHTML += `
      <div class="card">
        <img src="${manwha.image}" alt="${manwha.title}" />
        <div class="card-content">
          <h2>${manwha.title}</h2>
          <div class="card-genres">${genreTags}</div>
          <div class="card-meta">
            <span class="card-rating">⭐ ${manwha.rating}/10</span>
            <span class="card-status ${statusClass}">${manwha.status}</span>
          </div>
          <a class="read-link" href="${manwha.readLink}" target="_blank">Read Now →</a>
        </div>
      </div>
    `;
  });
}


// ============================================
// INIT — run when page loads
// ============================================

document.addEventListener("DOMContentLoaded", showCards);

/*
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

*/