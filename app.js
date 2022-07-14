// Get only unique categories
// iterate over categories return buttons
// Make sure to select buttons when they are available 

// items


const menu = [
  {
    id: 1,
    title: "Máslové palačinky",
    category: "snídaně",
    price: 269,
    img: "https://media.gettyimages.com/photos/pancake-with-sliced-strawberry-picture-id1278640429?b=1&k=20&m=1278640429&s=170667a&w=0&h=NnavKy_9bL8RU-sr3CyIM-riCE1NnsHAJTgwuuYZCIU=",
    desc: `Máslíčko je moc moc dobrý a palačinky z něj ještě lepší! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque laudantium possimus non officiis eligendi eaque, quisquam fuga magni nulla, hic, nobis quo labore totam. `,
  },
  {
    id: 2,
    title: "Nálož pro dva",
    category: "oběd",
    price: 459,
    img: "https://c0.wallpaperflare.com/preview/146/189/90/burger-chips-dinner-fast-food-thumbnail.jpg",
    desc: `Mňamka Mňamka Mňamka Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque laudantium possimus non officiis eligendi eaque, quisquam fuga magni nulla, hictotam. `,
  },
  {
    id: 3,
    title: "Godzilla milkshake",
    category: "shakes",
    price: 145,
    img: "https://static.wixstatic.com/media/97feac_86bfac808db14b18b7fc18309a8d60c6~mv2.jpg/v1/fill/w_438,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/close-up-photo-of-dessert-on-top-of-the-.jpg",
    desc: `Moc moc dobrý Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque laudantiue, quisquam fuga magni nulla, hic, nobis quo labore totam.`,
  },
  {
    id: 4,
    title: "Vesnická senzace",
    category: "snídaně",
    price: 425,
    img: "https://s3.theasianparent.com/cdn-cgi/image/width=700,quality=95/tap-assets-prod/wp-content/uploads/sites/12/2017/12/egg-top.jpg",
    desc: `Moc moc dobrý Moc moc dobrý Moc moc dobrý sit amet consectetur adipisicing elit. Delectus atque laudantique, quisquam fuga magni nulla, hic, nobis quo labore totam.`,
  },
  {
    id: 5,
    title: "Vajíčkový útok",
    category: "oběd",
    price: 299,
    img: "https://64.media.tumblr.com/a49e6a8e284e498fe136744a9381f3e4/7e3e94d40d5acffe-71/s500x750/869cd8f279d3910ea86f71b1bbec4c8e1dbf7ac6.jpg",
    desc: `výborný mňam mňam výborný mňam mňam onsectetur adipisicing elit. Delectus atque laudantiumendi eaque, quisquam fuga magni nulla, hic, nobis quo labore totam. 90's pop-up `,
  },
  {
    id: 6,
    title: "Oreo sen",
    category: "shakes",
    price: 379,
    img: "https://obs.line-scdn.net/0hLtCapA46E1t-GATjlYJsDEZOHypNfglSXCpYaFtPH2hUNFZfEndAOFMQSXcDegALXnlZag8fTDlbfAcMQg/w644",
    desc: `Lorem inon officiis eligendi eaque, quisquam fuga magni nulla, hic, nobis qu`,
  },
  {
    id: 7,
    title: "Slaninový přestřel",
    category: "snídaně",
    price: 194,
    img: "https://4.bp.blogspot.com/-kmLa02axys8/WPt35tklazI/AAAAAAAACTU/UNQuqf_eIO4SFLf3bhFM_LuuKUVff0uaACLcB/s1600/pexels-photo-139746%255B1%255D.jpg",
    desc: `cLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque laudantium possimus non officiis eligendi eaque, quisquam fuga magni nulla, hic, nobis quo labore totam. `,
  },
  {
    id: 8,
    title: "Americká klasika",
    category: "oběd",
    price: 235,
    img: "https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `výborný mňam mňam výborný mňam mňam sectetur adipisicing elit. Delectus atque laudantiui eaque, quisquam fuga magni nulla, hic, nobis quo labore totam. `,
  },
  {
    id: 9,
    title: "Kámoš do karantény",
    category: "shakes",
    price: 342,
    img: "https://www.novinykraje.cz/liberecky/wp-content/uploads/sites/9/2020/08/pexles-326x245.jpg",
    desc: `Karanténa + moc moc moc dobrý! hic, nobis quo labore totam..`,
  },
  {
    id: 10,
    title: "Steaková večeře",
    category: "večeře",
    price: 745,
    img: "https://kaagentladies.be/sites/default/files/styles/blog_basic-page/public/steakfestijn.jpg?itok=GSsyDzV7",
    desc: `Steak moc moc dobrý a k večeři ještě lepší laudantiui eaque, quisquam fuga magni nulla, hic.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");


// loading items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});




function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price} Kč</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values
  },
    ["Vše"]
  );
  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>
    ${category}
    </button>`
  }).join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;

      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);

        if (menuItem.category === category) {
          return menuItem;
        }
      })
      if (category === "Vše") {
        displayMenuItems(menu);
      }
      else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
