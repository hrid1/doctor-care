const data = [
  {
    id: 1,
    title: "Dolor de cabeza",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
  {
    id: 2,
    title: "Fiebre alta",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Cansancio extremo",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    title: "Problemas digestivos",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 5,
    title: "Resfriado común",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    title: "Dolor muscular",
    description:
      "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];

// console.log("from js");

function card(item) {
  const serviceCard = document.createElement("div");
  serviceCard.classList = "p-6 space-y-4 bg-white rounded shadow hover:scale-105 transition-all duration-300 cursor-pointer";
  serviceCard.innerHTML = ` <i class="ri-arrow-right-up-line bg-green-100 rounded-full p-1"></i>
    <h3 class="text-2xl font-bold">${item.title}</h3> <p class="text-gray-500">${item.description}</p>`;

  return serviceCard;
}
//
function showServiceCard() {
  const serviceContainer = document.getElementById("services");

  data.map((item) => {
    const serviceCard = card(item);
    serviceContainer.appendChild(serviceCard);
  });
}

showServiceCard();
