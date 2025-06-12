const items = [
  // 0 Cow - গরু (unchanged - Wikimedia)
  {
    name: "Cow - গরু",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/050/160/959/small_2x/cute-cartoon-black-and-white-cow-animal-isolated-on-the-transparent-background-png.png",
  },
  // 1 Dog - কুকুর (fixed: new reliable image)
  {
    name: "Dog - কুকুর",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  // 2 Cat - বিড়াল (fixed: new)
  {
    name: "Cat - বিড়াল",
    image:
      "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",
  },
  // 3 Lion - সিংহ (unchanged)
  {
    name: "Lion - সিংহ",
    image:
      "https://wallpapers.com/images/hd/cartoon-lion-cute-png-05032024-jsg2gxjgs8djiavi.jpg",
  },
  // 4 Giraffe - জিরাফ (fixed: new Wikimedia)
  {
    name: "Giraffe - জিরাফ",
    image:
      "https://png.pngtree.com/png-clipart/20231015/original/pngtree-cartoon-giraffe-illustration-png-image_13300816.png",
  },
  // 5 Elephant - হাতি
  {
    name: "Elephant - হাতি",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg",
  },
  // 6 Horse - ঘোড়া (unchanged)
  {
    name: "Horse - ঘোড়া",
    image:
      "https://png.pngtree.com/png-vector/20240720/ourmid/pngtree-cartoon-funny-brown-horse-standing-png-image_12999763.png",
  },
  // 7 Rabbit - খরগোশ (fixed: new Wikimedia)
  {
    name: "Rabbit - খরগোশ",
    image:
      "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6004/bunny-clipart-md.png",
  },
  // 8 Monkey - বানর (fixed: new Wikimedia)
  {
    name: "Monkey - বানর",
    image:
      "https://th.bing.com/th/id/R.7cb451579ed86b42ed5b2f68f48a3260?rik=PpwHVkPpeLrd6g&riu=http%3a%2f%2fclipart-library.com%2fimages%2f6ip6R5zAT.png&ehk=pBaU%2fkQSsYNJQFUVsC5rCviDDLQXjy9jmklv9%2f28W0o%3d&risl=&pid=ImgRaw&r=0",
  },
  // 9 Frog - ব্যাঙ (fixed: new Wikimedia)
  {
    name: "Frog - ব্যাঙ",
    image:
      "https://png.pngtree.com/png-clipart/20230414/original/pngtree-cute-frog-illustration-png-image_9056562.png",
  },
  // 10 Duck - হাঁস (fixed: new Wikimedia)
  {
    name: "Duck - হাঁস",
    image:
      "https://img.freepik.com/premium-photo/cute-white-duck-cartoon-vector-illustration-white-background_899449-331438.jpg",
  },
  // 11 Parrot - তোতা (fixed: new Wikimedia)
  {
    name: "Parrot - তোতা",
    image:
      "https://img.freepik.com/free-vector/cute-macaw-cartoon-sitting-branch_96037-439.jpg",
  },

  // Fruits section

  // 12 Apple - আপেল
  {
    name: "Apple - আপেল",
    image:
      "https://img.freepik.com/free-vector/apple-colorful-vector-design_341269-1123.jpg",
  },
  // 13 Banana - কলা (fixed: new Wikimedia)
  {
    name: "Banana - কলা",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/800px-Banana-Single.jpg",
  },
  // 14 Mango - আম (unchanged)
  {
    name: "Mango - আম",
    image:
      "https://img.freepik.com/free-psd/delicious-mango-studio_23-2151843107.jpg",
  },
  // 15 Strawberry - স্ট্রবেরি (fixed: new Wikimedia)
  {
    name: "Strawberry - স্ট্রবেরি",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/800px-PerfectStrawberry.jpg",
  },
  // 16 Orange - কমলা
  {
    name: "Orange - কমলা",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/800px-Orange-Fruit-Pieces.jpg",
  },
  // 17 Pineapple - আনারস
  {
    name: "Pineapple - আনারস",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/800px-Pineapple_and_cross_section.jpg",
  },
  // 18 Watermelon - তরমুজ
  {
    name: "Watermelon - তরমুজ",
    image:
      "https://img.freepik.com/free-vector/realistic-illustration-watermelon-dessert-peace-slice-fruit-concept_1262-13479.jpg",
  },
  // 19 Cherry - চেরি (fixed: new Wikimedia)
  {
    name: "Cherry - চেরি",
    image:
      "https://img.freepik.com/free-vector/seamless-cherry-pattern-vector-illustration_1308-174579.jpg",
  },
  // 20 Peach - পীচ
  {
    name: "Peach - পীচ",
    image:
      "https://img.freepik.com/free-vector/chopped-peach-set-vector_1308-116799.jpg",
  },
  // 21 Pear - নাশপাতি (fixed: new Wikimedia)
  {
    name: "Pear - নাশপাতি",
    image:
      "https://img.freepik.com/free-vector/isolated-green-pear-cartoon_1308-126377.jpg",
  },
  // 22 Grapes - আঙ্গুর (fixed: new Wikimedia)
  {
    name: "Grapes - আঙ্গুর",
    image:
      "https://img.freepik.com/free-photo/delicious-sweet-red-grapes-still-life_23-2151538245.jpg",
  },
  // 23 Pomegranate - ডালিম
  {
    name: "Pomegranate - ডালিম",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-pomegranate-background_23-2148061848.jpg",
  },
];

const container = document.getElementById("card-container");

items.forEach((item) => {
  const col = document.createElement("div");
  col.className = "col";
  col.innerHTML = `
    <div class="card" onclick="playSound('${item.name}')">
      <img src="${item.image}" alt="Image">
    </div>
  `;
  container.appendChild(col);
});

function playSound(text) {
  const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
    text
  )}&tl=bn&client=tw-ob`;
  const audio = new Audio(ttsUrl);
  audio.play();
}
