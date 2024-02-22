const bars = document.querySelector("#bars")
const res = document.querySelector(".responsive_menu")
const cl = document.querySelector("#close")

bars.addEventListener('click', () => {
    res.style.display = "block"
    bars.style.display = "none"
    cl.style.display = "block"

});

cl.addEventListener('click', () => {
    res.style.display = "none";
    bars.style.display = "block";
    cl.style.display = "none";
})

// -----------------------------------------------------------------about------------------------------------------------

const divAbout = document.querySelector(".about-1");
const aboutImg = document.querySelector(".aboutImg")
const aboutText = document.querySelector(".aboutText")

const obsCallbackAbout = function(entriesAbout, observerAbout) {
    entriesAbout.forEach((entrie) => {
        if (entrie.isIntersecting === true) {
            aboutImg.classList.remove("about-Img-hidden")
            aboutText.classList.remove("about-text-hidden")
        }
    })
}
const obsOptionAbout = {
    root: null,
    threshold: 0.1,
}

const observerAbout = new IntersectionObserver(obsCallbackAbout, obsOptionAbout)
observerAbout.observe(divAbout)

// -----------------------------------------------------------------mission img 1------------------------------------------

const div = document.querySelector(".image-1");
const left = document.querySelector(".left")

const obsCallback = function(entries, observer) {
    entries.forEach((entrie) => {
        if (entrie.isIntersecting === true) {
            left.classList.remove("left-hidden")
        }
    })
}
const obsOption = {
    root: null,
    threshold: 0.1,
}

const observer = new IntersectionObserver(obsCallback, obsOption)
observer.observe(div)

// -----------------------------------------------------------------mission img 2------------------------------------------

const div2 = document.querySelector(".image-2");
const center = document.querySelector(".center")

const obsCallbackImg2 = function(entries2, observer2) {
    entries2.forEach((entrie) => {
        if (entrie.isIntersecting === true) {
            center.classList.remove("center-hidden")
        }
    })
}
const obsOptionImg2 = {
    root: null,
    threshold: 0.1,
}

const observerImg2 = new IntersectionObserver(obsCallbackImg2, obsOptionImg2)
observerImg2.observe(div2)

// -----------------------------------------------------------------mission img 3------------------------------------------

const div3 = document.querySelector(".image-3");
const right = document.querySelector(".right")

const obsCallbackImg3 = function(entries3, observer3) {
    entries3.forEach((entrie) => {
        if (entrie.isIntersecting === true) {
            right.classList.remove("right-hidden")
        }
    })
}
const obsOptionImg3 = {
    root: null,
    threshold: 0.1,
}

const observerImg3 = new IntersectionObserver(obsCallbackImg3, obsOptionImg3)
observerImg3.observe(div3)

// -------------------------------------------------------------------feature 1----------------------------------

const divFeature = document.querySelector(".f-img");
const featureNews = document.querySelector(".featureNewsImgHidden")
const featureNewsT = document.querySelector(".featureNewsImgHiddenText")

const obsCallback1 = function(entries1, observer1) {
    entries1.forEach((entrie) => {
        if (entrie.isIntersecting === true) {
            featureNews.classList.remove("left-news-hidden")
            featureNewsT.classList.remove("left-news-hidden-text")
        }
    })
}
const obsOption1 = {
    root: null,
    threshold: 0.1,
}

const observer1 = new IntersectionObserver(obsCallback1, obsOption1)
observer1.observe(divFeature)

// ------------------------------------------------------------------feature 2------------------------------------------------

const divFeature2 = document.querySelector(".img-7");
const featureImg7 = document.querySelector(".featureImg7Hidden")
const featureImg7T = document.querySelector(".featureImg7HiddenText")
const obsCallback2 = function(entries2, observer2) {
    entries2.forEach((entrie) => {
        if (entrie.isIntersecting === true) {
            featureImg7.classList.remove("left-img7-hidden")
            featureImg7T.classList.remove("left-img7-hidden-text")
        }
    })
}
const obsOption2 = {
    root: null,
    threshold: 0.1,
}

const observer2 = new IntersectionObserver(obsCallback2, obsOption2)
observer2.observe(divFeature2)

// -----------------------------------------------------------------feature 3----------------------------------------------------

const divFeature3 = document.querySelector(".img-8");
const featureImg8 = document.querySelector(".featureImg8Hidden")
const featureImg8T = document.querySelector(".featureImg8HiddenText")
const obsCallback3 = function(entries3, observer3) {
    entries3.forEach((entrie) => {
        if (entrie.isIntersecting === true) {
            featureImg8.classList.remove("left-img8-hidden")
            featureImg8T.classList.remove("left-img8-hidden-text")
        }
    })
}
const obsOption3 = {
    root: null,
    threshold: 0.1,
}

const observer3 = new IntersectionObserver(obsCallback3, obsOption3)
observer3.observe(divFeature3)

// <!------------------------------------------------------------ Donate People div------------------------------------------------------>

const divDonate = document.querySelector(".donate");
const donate = document.querySelector(".donate-visible")
const obsCallbackDonate = function(entriesDonate, observerDonate) {
    entriesDonate.forEach((entrie) => {
        if (entrie.isIntersecting === true) {
            donate.classList.remove("donate-hidden")
        }
    })
}
const obsOptionDonate = {
    root: null,
    threshold: 0.1,
}

const observerDonate = new IntersectionObserver(obsCallbackDonate, obsOptionDonate)
observerDonate.observe(divDonate)

// <!------------------------------------------------------------Donate People text----------------------------------------------------->

const divDonateT = document.querySelector(".donateT");
const donateT = document.querySelector(".donate-visibleT")
const obsCallbackDonateT = function(entriesDonateT, observerDonateT) {
    entriesDonateT.forEach((entrie) => {
        if (entrie.isIntersecting === true) {
            donateT.classList.remove("donate-hiddenT")
        }
    })
}
const obsOptionDonateT = {
    root: null,
    threshold: 0.1,
}

const observerDonateT = new IntersectionObserver(obsCallbackDonateT, obsOptionDonateT)
observerDonateT.observe(divDonateT)