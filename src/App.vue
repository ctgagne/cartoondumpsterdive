<template>
  <div id="app">
    <header>
      <div class="mobile-logo" @click="mobile = !mobile">
        <a href="#"><img src="@/assets/CDD.png" alt="CDD logo"/></a>
      </div>
      <div class="top-nav"></div>
      <div id="nav">
        <ul class="menu">
          <span class="section1">
            <li
              @mouseover="aboutpointer = true"
              @mouseleave="aboutpointer = false"
            >
              <a href="#about"
                >About the Podcast
                <transition name="appear">
                  <div class="pointer" v-if="aboutpointer">
                    <img src="@/assets/cartoonpointer.png" alt="pointer" />
                  </div> </transition
              ></a>
            </li>
            <li
              @mouseover="episodespointer = true"
              @mouseleave="episodespointer = false"
            >
              <a href="#episodes"
                >Episodes<transition name="appear">
                  <div class="pointer" v-if="episodespointer">
                    <img src="@/assets/cartoonpointer.png" alt="pointer" />
                  </div> </transition
              ></a>
            </li>
          </span>
          <div class="logo">
            <a href="#"><img src="@/assets/CDD.png" alt="CDD logo"/></a>
          </div>
          <span class="section2">
            <li
              @mouseover="listenpointer = true"
              @mouseleave="listenpointer = false"
            >
              <a
                href="https://teespring.com/stores/cartoon-dumpster-dive"
                target="_blank"
                >Shop Merch<transition name="appear">
                  <div class="pointer" v-if="listenpointer">
                    <img src="@/assets/cartoonpointer.png" alt="pointer" />
                  </div> </transition
              ></a>
            </li>
            <li
              @mouseover="socialpointer = true"
              @mouseleave="socialpointer = false"
              @click="(socialmenu = !socialmenu), (socialpointer = false)"
            >
              <div class="social-link">
                Social Media
                <transition name="appear">
                  <div class="pointer" v-if="socialpointer">
                    <img src="@/assets/cartoonpointer.png" alt="pointer" />
                  </div>
                </transition>
              </div>
              <transition name="expand">
                <Social v-if="socialmenu" />
              </transition>
            </li>
          </span>
        </ul>
        <transition name="flip">
          <div class="menu-button" @click="mobile = !mobile" v-if="!mobile">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </div>
        </transition>
        <transition name="flip">
          <div class="menu-button" @click="mobile = !mobile" v-if="mobile">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
              />
            </svg>
          </div>
        </transition>

        <div class="mobileclick" @click="mobile = !mobile">
          <transition name="slide">
            <MobileMenu v-if="mobile" />
          </transition>
        </div>
      </div>
    </header>
    <router-view />
    <Episodes />
    <Contact />
    <transition name="slide2">
      <ContactMobile v-if="mobile" />
    </transition>
    <About />
    <Subscribe />
    <footer>
      © 2020 Cartoon Dumpster Dive
      <a
        href="https://www.privacypolicygenerator.info/live.php?token=GRH9WMRWnplrExIfguDxn4pLxFH1Gr0G"
        >Privacy Policy</a
      >
    </footer>
  </div>
</template>

<script>
import Episodes from "@/components/Episodes.vue";
import Social from "@/components/Social.vue";
import Contact from "@/components/Contact.vue";
import ContactMobile from "@/components/ContactMobile.vue";
import About from "@/components/About.vue";
import Subscribe from "@/components/Subscribe.vue";
import MobileMenu from "@/components/MobileMenu.vue";
export default {
  metaInfo: {
    title: "Cartoon Dumpster Dive"
  },
  components: {
    Social,
    Episodes,
    Contact,
    ContactMobile,
    About,
    Subscribe,
    MobileMenu
  },
  data() {
    return {
      aboutpointer: false,
      episodespointer: false,
      listenpointer: false,
      socialpointer: false,
      socialmenu: false,
      mobile: false
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Chewy&family=Courgette&family=Oswald:wght@200;300;400;500;600;700&display=swap");
#app {
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d1c2b;
}

:root {
  --light-text: #f6eae8;
  --dark-text: #2d1c2b;
  --light-bg: #f6eae8;
  --dark-bg: #2d1c2b;
  --primary-color: #c993a9;
  --comp-color: #ffa5b4;
}

body,
html {
  margin: 0 auto;
  background: linear-gradient(
      243.18deg,
      #f9eadd 0%,
      rgba(254, 255, 253, 0.0104167) 67.28%,
      #98567a 100%
    ),
    #f6eae8;
  background-size: 100%;
  background-attachment: fixed;
  scroll-behavior: smooth;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--dark-bg);
  z-index: 3;
  width: 100%;
}

.top-nav {
  height: 75px;
  background-color: var(--light-bg);
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23c993a9' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  z-index: 8;
}

#nav {
  font-family: "Courgette", cursive;
  color: var(--light-text);
  background-color: var(--dark-bg);
  max-width: 1440px;
  height: 68px;
  z-index: 7;
  margin: 0 auto;
  position: relative;
}

#nav ul {
  display: flex;
  max-width: 1440px;
  margin: 0;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  transform: translateY(-90px);
  position: relative;
}

span.section1 {
  flex: 1;
  text-align: right;
}

span.section2 {
  flex: 1;
  text-align: left;
}

#nav li,
#nav a {
  display: inline-block;
  color: var(--light-text);
  text-decoration: none;
  list-style-type: none;
  padding: 9px 1rem;
  font-size: 24px;
  text-align: center;
  position: relative;
  transition: all 0.2s ease;
}

#nav li a:hover {
  color: var(--comp-color);
}

span.section1 li:first-child {
  border-right: 1px solid rgba(0, 0, 0, 0.4);
  border-left: 1px solid rgba(0, 0, 0, 0.4);
}

span.section2 li:last-child {
  border-right: 1px solid rgba(5, 0, 0, 0.4);
  border-left: 1px solid rgba(0, 0, 0, 0.4);
}

.social-link {
  padding: 9px 1rem;
  position: relative;
}

.social-link:hover {
  cursor: pointer;
  color: var(--comp-color);
}

#nav .logo {
  float: center;
}

#nav .logo img {
  width: 170px;
}

#nav .logo a {
  padding: 9px 0;
}

#nav .logo img:hover {
  animation: Bounce 1s;
}

@keyframes Bounce {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

.pointer img {
  position: absolute;
  display: block;
  width: 75px;
  top: 57px;
  left: 25%;
  animation: Point 1s infinite;
}

@keyframes Point {
  0% {
    transform: translateY(0) rotate(-90deg);
  }
  25% {
    transform: translateY(10px) rotate(-90deg);
  }
  50% {
    transform: translateY(0) rotate(-90deg);
  }
  75% {
    transform: translateY(10px) rotate(-90deg);
  }
  100% {
    transform: translateY(0) rotate(-90deg);
  }
}

.appear-enter-active,
.appear-leave-active {
  transition: opacity 0.3s;
}
.appear-enter, .appear-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.3s;
}
.expand-enter, .expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.mobile-logo {
  display: none;
  z-index: 15;
  position: relative;
}

.menu-button {
  display: none;
  z-index: 10;
  position: relative;
}

@media (max-width: 1024px) {
  #nav li,
  #nav a {
    font-size: 20px;
  }
}

@media (max-width: 930px) {
  #nav {
    height: 56px;
  }
  .top-nav {
    height: 56px;
  }
  #nav li,
  #nav a {
    font-size: 16px;
    border: none;
  }
  #nav ul {
    transform: translateY(-55px);
  }
  #nav .logo {
    order: -2;
  }

  #nav .logo img {
    width: 100px;
  }

  #nav .logo a {
    padding: 9px 0;
  }

  #nav .logo img:hover {
    animation: Bounce 1s;
  }
}

@media (max-width: 761px) {
  #nav .menu {
    display: none;
  }
  .mobile-logo {
    display: block;
    position: absolute;
    top: 5%;
    left: 2%;
  }
  .mobile-logo img {
    width: 125px;
  }
  .top-nav {
    height: 56px;
    position: relative;
  }
  .menu-button {
    display: flex;
    position: absolute;
    border: 2px solid var(--light-bg);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    top: 8%;
    right: 2.5%;
    justify-content: center;
    z-index: 4;
  }
  .menu-button svg {
    fill: var(--light-bg);
    margin: 8px;
    width: 30px;
    height: 30px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
}

.slide2-enter-active,
.slide2-leave-active {
  transition: all 1s ease-in-out;
}

.slide2-enter,
.slide2-leave-to {
  transform: rotate(180deg);
  opacity: 0;
}
.flip-enter-active,
.flip-leave-active {
  transition: all 0.8s ease-in-out;
}

.flip-enter,
.flip-leave-to {
  transform: rotate(360deg);
  opacity: 0;
}
</style>
