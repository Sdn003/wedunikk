//To fix Header to the top
const header = document.querySelector("#header__sticky");
const hr = document.querySelector("hr");
const landing_page_cover_wrapper = document.querySelector(
  ".landing_page_cover_wrapper"
);

window.onscroll = () => scrollFunction();
const sticky = hr.offsetTop;

const scrollFunction = () => {
  if (scrollY > sticky) {
    header.classList.add("sticky");
    landing_page_cover_wrapper.classList.add("extra_space");
  } else {
    header.classList.remove("sticky");
    landing_page_cover_wrapper.classList.remove("extra_space");
  }
};

//Hamburger Icon Functionality
const burger_icon = document.querySelector("#burger_icon");
const nav_list = document.querySelector(".nav_list");

burger_icon.onclick = () => {
  burger_icon.classList.toggle("bx-x");
  nav_list.classList.toggle("open");
};

//Closing Nav bar on Clicking a list Element
function closeSideBar(){
   burger_icon.onclick()
}

const sideBar_ul = document.querySelector("#navList_sidebar");
const sideBar_li = sideBar_ul.getElementsByTagName('li');
for (const li of sideBar_li) {
  li.addEventListener("click", closeSideBar);  
}

//OnLoad Blink Effect using Scroll Reveal
window.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    distance: "65px",
    duration: 1800,
    delay: 200,
    reset: true,
  });
  // sr.reveal(".appWrapper", { delay: 200, origin: top });
  sr.reveal(".landing_page_cover_wrapper", { delay: 150, origin: "top" });
  sr.reveal(".venues", { delay: 150, origin: "top" });
  sr.reveal(".popular_search", { delay: 150, origin: "bottom" });
  sr.reveal("#services", { delay: 150, origin: "top" });
  sr.reveal("#gallery", { delay: 150, origin: "bottom" });
  sr.reveal("#featured_Vendors", { delay: 150, origin: "top" });
  sr.reveal("#inhouse_services", { delay: 150, origin: "bottom" });
  sr.reveal("#blogs", { delay: 150, origin: "top" });
  sr.reveal("#contact_us", { delay: 150, origin: "bottom" });

  buildSwiperSlider(allSliders[0], 5, 4, 4, 4, 2, 1);
  buildSwiperSlider(allSliders[1], 5, 4, 4, 4, 2, 1);
  buildSwiperSlider(allSliders[2], 5, 4, 4, 4, 2, 1);
  buildSwiperSlider(allSliders[3], 2.8, 2.3, 2, 1, 1, 1);
  buildSwiperSlider(allSliders[4], 2.8, 2.3, 2, 1, 1, 1);
});

//Getting all swiper_wrapper HTML Elements
const allSwiperWrapper = document.querySelectorAll(".swiper-wrapper");

//Displaying Venue Cards
const venues_details = [
  {
    image: "./images/venues/five_star.jpeg",
    title: "Five Star Hotels",
  },
  { image: "./images/venues/banquet_hall.jpeg", title: "Banquet Halls" },

  {
    image: "./images/venues/destination_wedding.jpeg",
    title: "Destination Wedding",
  },
  {
    image: "./images/venues/golf_club.jpeg",
    title: "Golf Clubs",
  },
  {
    image: "./images/venues/hotels.jpeg",
    title: "Hotels and Party Halls",
  },
  {
    image: "./images/venues/heritage_property.jpeg",
    title: "Heritage Property",
  },
  {
    image: "./images/venues/kalyana_mandapam.jpeg",
    title: "Kalyana Mandapam",
  },
  {
    image: "./images/venues/lawns_farmhouse.jpeg",
    title: "Lawns and Farmhouses",
  },
  {
    image: "./images/venues/resorts.jpeg",
    title: "Resorts",
  },
  {
    image: "./images/venues/restaurants.jpeg",
    title: "Restaurants",
  },
  {
    image: "./images/venues/small_party_hall.jpeg",
    title: "Small Party Halls",
  },
  {
    image: "./images/venues/venues_with_rooms.jpeg",
    title: "Venues with more rooms",
  },
];

venues_details.map((venue) => {
  return (allSwiperWrapper[0].innerHTML += `
    <div class="swiper-slide"> 
                    <img src=${venue.image} alt=${venue.title} />
                     <h6>${venue.title}</h6> 
            </div>
            `);
});

//Displaying popular_searches
const popular_searches_details = [
  {
    image: "./images/popular_searches/bridal_wears.jpeg",
    title: "Bridal Wears",
  },
  {
    image: "./images/popular_searches/bridal_makeup.jpeg",
    title: "Bridal Makeup",
  },
  {
    image: "./images/popular_searches/invitations.jpeg",
    title: "Invitations",
  },
  {
    image: "./images/popular_searches/photgraphers.jpeg",
    title: "Photographers",
  },
  {
    image: "./images/popular_searches/groom_wears.jpeg",
    title: "Groom Wears",
  },
  {
    image: "./images/popular_searches/decorators.jpeg",
    title: "Decorators",
  },
  {
    image: "./images/popular_searches/mehendi_artists.jpeg",
    title: "Mehendi Artists",
  },
  {
    image: "./images/popular_searches/catering_services.jpeg",
    title: "Catering Servies",
  },
];

popular_searches_details.map((popular_search) => {
  return (allSwiperWrapper[1].innerHTML += `
    <div class="swiper-slide"> 
                    <div class="image_zoom_container">
                       <img src=${popular_search.image} alt=${popular_search.title} class="image_zoom_container__images"/>
                    </div>
                   <h6>${popular_search.title}</h6> 
            </div>
            `);
});

//Displaying Wedding Categories

const wedding_categories = [
  {
    image: "./images/services/venues.jpeg",
    title: "Venues",
    description:
      " Banquet halls, Lawns / Farmhouses, Resorts, Small Function /Party Halls",
    bgColor: "#FFD6A5",
  },
  {
    image: "./images/services/photographers.jpeg",
    title: "Photographers",
    description: "Photographers",
    bgColor: "#E3CAA5",
  },
  {
    image: "./images/services/makeup.jpeg",
    title: "Makeup",
    description: "Bridal Makeup",
    bgColor: "#FFCACC",
  },
  {
    image: "./images/services/wedding_photoshoot.jpeg",
    title: "Pre Wedding Photoshoots",
    description: "Pre Wedding Photographers",
    bgColor: "#C9BBCF",
  },
  {
    image: "./images/services/planning_and_decor.jpeg",
    title: "Planning & Decor",
    description: "Wedding Planners, Decorators, Small Function Decor",
    bgColor: "#B6E2A1",
  },
  {
    image: "./images/services/bridal_wear.jpeg",
    title: "Bridal Wear",
    description:
      "Bridal Lehengas, Kanjeevaram Silk Sarees, Cocktail Gowns, Trousseau Sarees, Bridal Lehenga on Rent",
    bgColor: "#BCCEF8",
  },
];

const service_container = document.querySelector(".services__venue_container");
wedding_categories.map((category) => {
  return (service_container.innerHTML += `
     <div class="card_wrapper" style="background-color : ${category.bgColor}">
            <div class="venue_wrapper_textContent" >
              <h4>${category.title}</h4>
              <p>${category.description}</p>
            </div>
            <div class="venue_wrapper_imgContent">
              <img src=${category.image} alt=${category.title} />
            </div>
          </div>
  `);
});

//Displaying Gallery
const gallery_details = [
  {
    image: "./images/gallery/lehengas.jpeg",
    title: "Bridal Lehengas",
  },
  {
    image: "./images/gallery/outfit_ideas.jpeg",
    title: "Outfits",
  },
  {
    image: "./images/gallery/wedding_sarees.jpeg",
    title: "Wedding Sarees",
  },
  {
    image: "./images/gallery/wedding_photoshoot_and_poses.jpeg",
    title: "Wedding Photoshoots & Poses",
  },
  {
    image: "./images/gallery/unique_wedding_ideas.jpeg",
    title: "Unique Wedding Ideas",
  },
  {
    image: "./images/gallery/wedding_hairstyles.jpeg",
    title: "Bridal Hairstyles",
  },
  {
    image: "./images/gallery/pre_wedding_photoshoot.jpeg",
    title: "Pre Wedding Shoot",
  },
  {
    image: "./images/gallery/wedding_accessories.jpeg",
    title: "Wedding Accessories",
  },
  {
    image: "./images/gallery/wedding_decor.jpeg",
    title: "Wedding Decors",
  },
  {
    image: "./images/gallery/mehendi_designs.jpeg",
    title: "Mehendi Designs",
  },
  {
    image: "./images/gallery/wedding_jewellery.jpeg",
    title: "Jewellery Designs",
  },
  {
    image: "./images/gallery/wedding_venues.jpeg",
    title: "Venues",
  },
  {
    image: "/images/gallery/wedding_gifts.jpeg",
    title: "Gifts",
  },
  {
    image: "./images/gallery/cakes.jpeg",
    title: "Cakes",
  },
];

gallery_details.map((gallery) => {
  return (allSwiperWrapper[2].innerHTML += `
    <div class="swiper-slide gallery_slide"> 
                    <div class="image_zoom_container">
                       <img src=${gallery.image} alt=${gallery.title} class="image_zoom_container__images"/>
                    </div>
                   <h6>${gallery.title}</h6> 
            </div>
            `);
});

//Displaying Featured Vendors
const featured_vendors_details = [
  {
    image: "./images/featured_vendors/fire_fly_photography.jpeg",
    title: "Fire Fly Photography",
    description: "Wedding Photographer",
    price: "Rs.80,1000 per day",
    rating: "4.8",
  },
  {
    image: "./images/featured_vendors/frozen_memories.jpeg",
    title: "Forever Memories",
    description: "Wedding Decorators",
    price: "Rs.75,000 per day",
    rating: "4.5",
  },
  {
    image: "./images/featured_vendors/blushing_bride_makeovers.jpeg",
    title: "Blushing Bride Makeovers",
    description: "Bridal Makeup",
    price: "Rs.35,000",
    rating: "5.0",
  },
  {
    image: "./images/featured_vendors/acorn_films.jpeg",
    title: "Acorn Films",
    description: "Wedding Photographers",
    price: "Rs.90,000 per day",
    rating: "4.9",
  },
  {
    image: "./images/featured_vendors/happyfranes.jpeg",
    title: "Happy Frames",
    description: "Wedding Photographers, Gomti Nagar",
    price: "Rs.30,000 onwards",
    rating: "4.8",
  },
  {
    image: "./images/featured_vendors/blue_seas_events.jpeg",
    title: "Blue Sea Events",
    description: "Wedding Decorators, Charbagh",
    price: "Rs.40,000 onwards",
    rating: "4.9",
  },
  {
    image: "./images/featured_vendors/karnan_photography.jpeg",
    title: "Karnann Photography",
    description: "Wedding Photographer, Chennai",
    price: "Rs.80,000 onwards",
    rating: "4.7",
  },
  {
    image: "./images/featured_vendors/melam_wedding_decor.jpeg",
    title: "Melam Wedding Decors",
    description: "Wedding Decorators, Trichy",
    price: "Rs.1,00,00 onwards",
    rating: "5.0",
  },
  {
    image: "./images/featured_vendors/kd_studio.jpeg",
    title: "KD Studio",
    description: "Wedding Photographers",
    price: "Rs.1,00,000 onwards",
    rating: "4.8",
  },
  {
    image: "./images/featured_vendors/forever_wedding.jpeg",
    title: "Forever Wedding",
    description: "Wedding Decorators, Mumbai",
    price: "Rs.3,00,000 onwards",
    rating: "5.0",
  },
  {
    image: "./images/featured_vendors/nirwana_photography.jpeg",
    title: "Nirwana Photographers",
    description: "Wedding Photography, Lalbagh",
    price: "Rs.60,000 per day",
    rating: "4.5",
  },
  {
    image: "./images/featured_vendors/nitin_arora_photography.jpeg",
    title: "Nitin Arorra Photography",
    description: "Wedding Photographer, Pune",
    price: "Rs.1,50,000 per day",
    rating: "5.0",
  },
  {
    image: "./images/featured_vendors/conwedd_global.jpeg",
    title: "Conwedd Global",
    description: "Wedding Venues, New Delhi",
    price: "Rs.30,000 onwards",
    rating: "4.5",
  },
  {
    image: "./images/featured_vendors/rolls_and_reels.jpeg",
    title: "Rolls & Reels",
    description: "Wedding Decors and Photographers",
    price: "Rs.2,00,000 to Rs.10,00,000",
    rating: "5.0",
  },
  {
    image: "./images/featured_vendors/sattva_wedding.jpeg",
    title: "Sattva Wedding",
    description: "Wedding Decorators, Rajasthan",
    price: "Rs.2,50,000 onwards",
    rating: "4.7",
  },
  {
    image: "./images/featured_vendors/unscripted_co.jpeg",
    title: "Unscripted .co",
    description: "Wedding Events & Photographers",
    price: "Rs.80,000 onwards",
    rating: "4.9",
  },
];

featured_vendors_details.map((featured_vendor) => {
  return (allSwiperWrapper[3].innerHTML += `
    <div class="swiper-slide featured_vendor_slide"> 
                    <div class="image_zoom_container">
                       <img src=${featured_vendor.image} alt=${featured_vendor.title} class="image_zoom_container__images"/>
                    </div>
                   <h6>${featured_vendor.title}</h6> 
                   <p class="description">${featured_vendor.description}</p>
                   <p class="price">${featured_vendor.price}</p>
                   <div class="rating"><i class='bx bxs-star'></i>&nbsp;<span>${featured_vendor.rating}</span></div>

            </div>
            `);
});

// Displaying Blogs
const blog_details = [
  {
    image: "./images/blogs/2.png",
    title: "Unique Bachelorette Themes That Are Save-Worthy!",
    date: "21 Sep, 2023",
    description:
      "It isn't easy planning a bachelorette party. You have a mandate in front of you: no clichéd stuff, nothing your college rival has done at her bachelorette, and no lame ideas. That's a tall order, but in reality, you might be running out of ideas to make your bachelorette party out of this world. Well, here are a few unique suggestions that definitely break the mold. ",
  },
  {
    image: "./images/blogs/4.png",
    title: "Gorgeous Wedding Setups That Are Not Mandaps!",
    date: "18 Sep, 2023",
    description:
      "When we think of weddings, we often picture the majestic mandap – the sacred altar where the bride and groom take their vows. However, the world of wedding decor has evolved, offering a plethora of breathtaking alternatives to the traditional mandap. So today we're going to take you on a visual journey through some of the most awe-inspiring wedding setups that deviate from the conventional mandap",
  },
  {
    image: "./images/blogs/7.png",
    title: "A Bollywood-Inspired Wedding In Goa",
    date: "10 Sep, 2023",

    description:
      "Something that's so striking for us in most of the weddings we are featuring these days is- how happy and vibrant the couple looks! Gone are the days of the coy shy bride- brides these days enjoy their wedding more than anyone else present, and when that emotion is captured on camera, there is nothing like it! Jumping Souls",
  },
  {
    image: "./images/blogs/1.png",
    title: "This Couple planned their lovely Ludhiana Wedding",
    date: "6 Sep, 2023",
    description:
      "A hands-on couple is always refreshing to come across! Avreen and Jaikiran planned their own wedding down to every detail with ideas and inspiration from WedUnikk, and we love how the wedding turned out. It was definitely one that was subtle yet elegant, and we love how it was completely conceptualised and designed by the couple without the help of a planner.",
  },
  {
    image: "./images/blogs/3.png",
    title: "Bridal Lehengas: 20+ Gorgeous Ones We Spotted!",
    date: "28 Aug, 2023",
    description:
      "Orange is a very unlikely bridal hue - whether it's a light shade, a bright one, or full-on tangerine. More and more brides are choosing this color, and we really like it! It combines the vibrance of red and pink while still being traditional when you want it to be. From the Mehendi to the wedding day, here are some brides who rocked a pretty orange lehenga, which we personally loved! ",
  },
  {
    image: "./images/blogs/6.png",
    title: "This Stunning Nikah Had A Bride Who Wore Kaleeras!",
    date: "25 Aug, 2023",
    description:
      "There is an unmatched grace and elegance in Pakistani weddings, and we are seeing brides break moulds and try something new! Sajal is a bride who knew just what she wanted, and her bridal look was out of the ordinary. With a subtle yet stunning bridal outfit in ivory and gold, ",
  },
  {
    image: "./images/blogs/5.png",
    title: "Marathi Lagna Patrika Format & Invitation Templates",
    date: "22 Aug, 2023",
    description:
      "Lagna patrika a.k.a. wedding invitation card in Marathi is one of the first steps where a Maharashtrian wedding celebration begins. Within its intricate folds, it not only bears the sacred muhurta, the auspicious moment when two souls unite in matrimony but also encapsulates the essence of this vibrant tradition.",
  },
  {
    image: "./images/blogs/8.png",
    title: "Subha Muhurtham Dates 2024 - Tamil Calendar",
    date: "18 Aug, 2023",
    description:
      "If there is something almost 90 percent of the couples still checkup while deciding their wedding date, is whether to not the date is auspicious. The dates differ for different cultures, and there are some dates that are auspicious for all. If you are looking for 2024 tamil calendar muhurtham dates, then you are at the right place. ",
  },
];
blog_details.map((blog) => {
  return (allSwiperWrapper[4].innerHTML += `
    <div class="swiper-slide blog_slide"> 
                    <div class="image_zoom_container blog_image" >
                       <img src=${blog.image} alt=${blog.title} class="image_zoom_container__images"/>
                    </div>
                   <h6>${blog.title}</h6> 
                   <p class="description">${blog.description}</p>
                   <p class="date">${blog.date}</p> 
            </div>
            `);
});

//Getting all Swiper
const allSliders = document.querySelectorAll(".swiper");

const buildSwiperSlider = (sliderElm, c1, c2, c3, c4, c5, c6) => {
  const sliderClass = sliderElm.classList[1];
  const navBarNextClass = sliderElm.children[1].classList[1];
  const navBarPrevClass = sliderElm.children[2].classList[1];
  return new Swiper(`.${sliderClass}`, {
    spaceBetween: 30,
    loop: false,
    grabCursor: true,
    breakpoints: {
      2830: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1765: {
        slidesPerView: 3.7,
        spaceBetween: 20,
      },

      1500: {
        slidesPerView: c1,
        spaceBetween: 20,
      },

      1317: {
        slidesPerView: c1,
        spaceBetween: 20,
      },

      1080: {
        slidesPerView: c2, //2
        spaceBetween: 20,
      },

      900: {
        slidesPerView: c3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: c4,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: c5,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: c6,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: `.${navBarNextClass}`,
      prevEl: `.${navBarPrevClass}`,
    },
  });
};
