// Microseasons
const dateRangeInfo = [
  { startMonth: 1, startDay: 1, endMonth: 1, endDay: 4, info: "Wheat sprouts under snow" },
  { startMonth: 1, startDay: 5, endMonth: 1, endDay: 9, info: "Parsley flourishes" },
  { startMonth: 1, startDay: 10, endMonth: 1, endDay: 14, info: "Springs thaw" },
  { startMonth: 1, startDay: 15, endMonth: 1, endDay: 19, info: "Pheasants start to call" },
  { startMonth: 1, startDay: 20, endMonth: 1, endDay: 24, info: "Butterburs bud" },
  { startMonth: 1, startDay: 25, endMonth: 1, endDay: 29, info: "Ice thickens on streams" },
  { startMonth: 1, startDay: 30, endMonth: 2, endDay: 3, info: "Hens start laying eggs" },
  { startMonth: 2, startDay: 4, endMonth: 2, endDay: 8, info: "East wind melts the ice" },
  { startMonth: 2, startDay: 9, endMonth: 2, endDay: 13, info: "Bush warblers start singing in the mountains" },
  { startMonth: 2, startDay: 14, endMonth: 2, endDay: 18, info: "Fish emerge from the ice" },
  { startMonth: 2, startDay: 19, endMonth: 2, endDay: 23, info: "Rain moistens the soil" },
  { startMonth: 2, startDay: 24, endMonth: 2, endDay: 28, info: "Mist starts to linger" },
  { startMonth: 3, startDay: 1, endMonth: 3, endDay: 5, info: "Grass sprouts, trees bud" },
  { startMonth: 3, startDay: 6, endMonth: 3, endDay: 10, info: "Hibernating insects surface" },
  { startMonth: 3, startDay: 11, endMonth: 3, endDay: 15, info: "First peach blossoms" },
  { startMonth: 3, startDay: 16, endMonth: 3, endDay: 20, info: "Caterpillars become butterflies" },
  { startMonth: 3, startDay: 21, endMonth: 3, endDay: 25, info: "Sparrows start to nest" },
  { startMonth: 3, startDay: 26, endMonth: 3, endDay: 30, info: "First cherry blossoms" },
  { startMonth: 3, startDay: 31, endMonth: 4, endDay: 4, info: "Distant thunder" },
  { startMonth: 4, startDay: 5, endMonth: 4, endDay: 9, info: "Swallows return" },
  { startMonth: 4, startDay: 10, endMonth: 4, endDay: 14, info: "Wild geese fly north" },
  { startMonth: 4, startDay: 15, endMonth: 4, endDay: 19, info: "First rainbows" },
  { startMonth: 4, startDay: 20, endMonth: 4, endDay: 24, info: "First reeds sprout" },
  { startMonth: 4, startDay: 25, endMonth: 4, endDay: 29, info: "Last frost, rice seedlings grow" },
  { startMonth: 4, startDay: 30, endMonth: 5, endDay: 4, info: "Peonies bloom" },
  { startMonth: 5, startDay: 5, endMonth: 5, endDay: 9, info: "Frogs start singing" },
  { startMonth: 5, startDay: 10, endMonth: 5, endDay: 14, info: "Worms surface" },
  { startMonth: 5, startDay: 15, endMonth: 5, endDay: 20, info: "Bamboo shoots sprout" },
  { startMonth: 5, startDay: 21, endMonth: 5, endDay: 25, info: "Silkworms start feasting on mulberry leaves" },
  { startMonth: 5, startDay: 26, endMonth: 5, endDay: 30, info: "Safflowers bloom" },
  { startMonth: 5, startDay: 31, endMonth: 6, endDay: 5, info: "Wheat ripens and is harvested" },
  { startMonth: 6, startDay: 6, endMonth: 6, endDay: 10, info: "Praying mantises hatch" },
  { startMonth: 6, startDay: 11, endMonth: 6, endDay: 15, info: "Rotten grass becomes fireflies" },
  { startMonth: 6, startDay: 16, endMonth: 6, endDay: 20, info: "Plums turn yellow" },
  { startMonth: 6, startDay: 21, endMonth: 6, endDay: 26, info: "Self-heal withers" },
  { startMonth: 6, startDay: 27, endMonth: 7, endDay: 1, info: "Irises bloom" },
  { startMonth: 7, startDay: 2, endMonth: 7, endDay: 6, info: "Crow-dipper sprouts" },
  { startMonth: 7, startDay: 7, endMonth: 7, endDay: 11, info: "Warm winds blow" },
  { startMonth: 7, startDay: 12, endMonth: 7, endDay: 16, info: "First lotus blossoms" },
  { startMonth: 7, startDay: 17, endMonth: 7, endDay: 22, info: "Hawks learn to fly" },
  { startMonth: 7, startDay: 23, endMonth: 7, endDay: 28, info: "Paulownia trees produce seeds" },
  { startMonth: 7, startDay: 29, endMonth: 8, endDay: 2, info: "Earth is damp, air is humid" },
  { startMonth: 8, startDay: 3, endMonth: 8, endDay: 7, info: "Great rains sometimes fall" },
  { startMonth: 8, startDay: 8, endMonth: 8, endDay: 12, info: "Cool winds blow" },
  { startMonth: 8, startDay: 13, endMonth: 8, endDay: 17, info: "Evening cicadas sing" },
  { startMonth: 8, startDay: 18, endMonth: 8, endDay: 22, info: "Thick fog descends" },
  { startMonth: 8, startDay: 23, endMonth: 8, endDay: 27, info: "Cotton flowers bloom" },
  { startMonth: 8, startDay: 28, endMonth: 9, endDay: 1, info: "Heat starts to die down" },
  { startMonth: 9, startDay: 2, endMonth: 9, endDay: 7, info: "Rice ripens" },
  { startMonth: 9, startDay: 8, endMonth: 9, endDay: 12, info: "Dew glistens white on grass" },
  { startMonth: 9, startDay: 13, endMonth: 9, endDay: 17, info: "Wagtails sing" },
  { startMonth: 9, startDay: 18, endMonth: 9, endDay: 22, info: "Swallows leave" },
  { startMonth: 9, startDay: 23, endMonth: 9, endDay: 27, info: "Thunder ceases" },
  { startMonth: 9, startDay: 28, endMonth: 10, endDay: 2, info: "Insects hole up underground" },
  { startMonth: 10, startDay: 3, endMonth: 10, endDay: 7, info: "Farmers drain fields" },
  { startMonth: 10, startDay: 8, endMonth: 10, endDay: 12, info: "Wild geese return" },
  { startMonth: 10, startDay: 13, endMonth: 10, endDay: 17, info: "Chrysanthemums bloom" },
  { startMonth: 10, startDay: 18, endMonth: 10, endDay: 22, info: "Crickets chirp around the door" },
  { startMonth: 10, startDay: 23, endMonth: 10, endDay: 27, info: "First frost" },
  { startMonth: 10, startDay: 28, endMonth: 11, endDay: 1, info: "Light rains sometimes fall" },
  { startMonth: 11, startDay: 2, endMonth: 11, endDay: 6, info: "Maple leaves and ivy turn yellow" },
  { startMonth: 11, startDay: 7, endMonth: 11, endDay: 11, info: "Camellias bloom" },
  { startMonth: 11, startDay: 12, endMonth: 11, endDay: 16, info: "Land starts to freeze" },
  { startMonth: 11, startDay: 17, endMonth: 11, endDay: 21, info: "Daffodils bloom" },
  { startMonth: 11, startDay: 22, endMonth: 11, endDay: 26, info: "Rainbows hide" },
  { startMonth: 11, startDay: 27, endMonth: 12, endDay: 1, info: "North wind blows the leaves from the trees" },
  { startMonth: 12, startDay: 2, endMonth: 12, endDay: 6, info: "Tachibana citrus tree leaves start to turn yellow" },
  { startMonth: 12, startDay: 7, endMonth: 12, endDay: 11, info: "Cold sets in, winter begins" },
  { startMonth: 12, startDay: 12, endMonth: 12, endDay: 16, info: "Bears start hibernating in their dens" },
  { startMonth: 12, startDay: 17, endMonth: 12, endDay: 21, info: "Salmon gather and swim upstream" },
  { startMonth: 12, startDay: 22, endMonth: 12, endDay: 26, info: "Self-heal sprouts" },
  { startMonth: 12, startDay: 27, endMonth: 12, endDay: 31, info: "Deer shed antlers" },
];

function isDateInRange(date, start, end) {
  const year = date.getFullYear();
  const startDate = new Date(year, adjustMonth(start.month), start.day);
  const endDate = new Date(year, adjustMonth(end.month), end.day, 23, 59, 59, 999);
  console.log(`Checking range: ${startDate.toDateString()} to ${endDate.toDateString()}`);
  console.log(`Current date: ${date.toDateString()}`);
  console.log(`Is in range: ${date >= startDate && date <= endDate}`);
  return date >= startDate && date <= endDate;
}

function getseason() {
  const now = new Date();
  console.log(`Current date: ${now.toDateString()}`);
  for (const item of dateRangeInfo) {
    console.log(`Checking range: ${item.startMonth}/${item.startDay} to ${item.endMonth}/${item.endDay}`);
    if (isDateInRange(now,
        { month: item.startMonth, day: item.startDay },
        { month: item.endMonth, day: item.endDay })) {
      console.log(`Match found: ${item.info}`);
      return item.info;
    }
  }
  console.log("No match found, returning default message");
  return `Welcome! Today is ${now.toLocaleDateString()}.`;
}

function adjustMonth(month) {
  return month - 1;
}

function updateseason() {
  console.log("Updating season");
  const infoElement = document.getElementById('seasons');
  if (infoElement) {
    const info = getseason();
    console.log("Season:", info);
    // Wrap the text in a link
    infoElement.innerHTML = `<a href="#" class="seasons-link">${info}</a>`;

    // Add click event listener
    const link = infoElement.querySelector('.seasons-link');
    link.addEventListener('click', function(e) {
      e.preventDefault();
        window.location.href = "https://hinodeya-japan.com/blogs/a-glimpse-of-yesterday/discovering-the-sekki-a-comprehensive-list-of-japans-24-mini-seasons";
    });
  } else {
    console.error("season element not found");
  }
}

// Updates the info when the page loads
document.addEventListener('DOMContentLoaded', updateseason);

// Updates every hour to handle date changes
setInterval(updateseason, 3600000);
