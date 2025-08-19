jQuery(document).ready(function () {
  (function () {
    // your page initialization code here
    // the DOM will be available here
    AOS.init({
      duration: 750,
      offset: 0, // offset (in px) from the original trigger point
      anchorPlacement: "top-bottom", // define where the AOS animations will be triggered
    });
  })();
});

// //

document.querySelectorAll(".deals__close").forEach((btn) => {
  btn.addEventListener("click", () => {
    const deals = btn.closest(".deals");
    if (deals) {
      deals.classList.add("deals--closed");
    }
  });
});

// //

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.body.classList.add("body--scrolled");
  } else {
    document.body.classList.remove("body--scrolled");
  }
});

// //

$(function () {
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  // Если устройство мобильное, то используем событие клика
  if (isMobileDevice()) {
    $(document).on("click", function (event) {
      // Проверяем, является ли цель клика элементом с классом '.lang'
      if (!$(event.target).closest(".dropdown").length) {
        // Если нет, убираем класс 'dropdown--active' у всех элементов с этим классом
        $(".dropdown").removeClass("dropdown--active");
      } else {
        // Иначе добавляем/убираем класс 'dropdown--active' для элемента с классом '.dropdown'
        $(event.target).closest(".dropdown").toggleClass("dropdown--active");
      }
    });
  } else {
    // Иначе используем событие ховера
    $(".dropdown").on("mouseover", function () {
      $(this).addClass("dropdown--active");
    });

    $(".dropdown").on("mouseout", function () {
      $(this).removeClass("dropdown--active");
    });
  }

  $(".burger").on("click", function (event) {
    $("body").toggleClass("body--active");
  });

  $(".menu__link").on("click", function (event) {
    $("body").toggleClass("body--active");
  });

});

// //

new Swiper(".heading-swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 750,
  spaceBetween: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true, // плавное перекрытие старого и нового слайда
  },
  navigation: {
    prevEl: ".arrow--heading-prev",
    nextEl: ".arrow--heading-next",
  },
});

// //

new Swiper(".rooms-swiper", {
  slidesPerView: 4,
  loop: true,
  speed: 750,
  spaceBetween: 10,
  navigation: {
    prevEl: ".arrow--rooms-prev",
    nextEl: ".arrow--rooms-next",
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
    551: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
    993: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
    1201: {
      slidesPerView: 4,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
  },
});

// //

new Swiper(".offers-swiper", {
  slidesPerView: 2,
  loop: true,
  speed: 750,
  spaceBetween: 10,
  navigation: {
    prevEl: ".arrow--offers-prev",
    nextEl: ".arrow--offers-next",
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
    551: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
  },
});

// //

new Swiper(".gallery-swiper", {
  slidesPerView: 3,
  loop: true,
  speed: 750,
  spaceBetween: 10,
  navigation: {
    prevEl: ".arrow--gallery-prev",
    nextEl: ".arrow--gallery-next",
  },
  pagination: {
    el: ".pagination--gallery",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
    551: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
    993: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
  },
});

// //

new Swiper(".apartment-swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 750,
  spaceBetween: 30,
  navigation: {
    prevEl: ".arrow--apartment-prev",
    nextEl: ".arrow--apartment-next",
  },
});

// //

new Swiper(".restaurant-swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 750,
  spaceBetween: 30,
  navigation: {
    prevEl: ".arrow--restaurant-prev",
    nextEl: ".arrow--restaurant-next",
  },
});

// //

new Swiper(".deals-swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 750,
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true, // плавное перекрытие старого и нового слайда
  },
  pagination: {
    el: ".pagination--deals",
    type: "bullets",
    clickable: true,
  },
});

//

document.addEventListener("DOMContentLoaded", function () {
  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
          create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
              and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
          and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
      except the current select box: */
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);
});