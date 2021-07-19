<template>
  <div id="about">
    <div class="about-section">
      <div class="twitterfeed">
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            /></svg
          >Live Updates
        </h3>
        <Timeline
          id="cartoonDD"
          sourceType="profile"
          :options="{ tweetLimit: '20', theme: 'light' }"
        >
          <div class="spinner">
            <div class="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div></div
        ></Timeline>
      </div>
      <div class="about-us">
        <h1>
          A good podcast about bad cartoons.
        </h1>
        <p>
          Cartoon Dumpster Dive takes an in-depth look at some of the cartoons
          you may or may not remember fondly. We analyze everything from
          cartoons we blame on Ronald Reagan to "edutainment", and all the
          obscure cartoons in between. New episodes every Monday. <br />Feel
          free to suggest a cartoon here that we haven't covered yet, and be
          sure to tune in!
        </p>
        <p>Join us when we stream cartoon themed games!</p>
        <a href="https://www.twitch.tv/cartoondumpsterdive">
          <div class="twitch">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"
              />
            </svg>
            Follow us on Twitch!
          </div>
        </a>
        <p>Sent us a voice message!</p>
        <a href="https://www.speakpipe.com/cartoondumpsterdive">
          <div class="speak-pipe">
            <img src="@/assets/speakpipe-logo-gray.svg" alt="SpeakPipe" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "vue-tweet-embed/src/timeline";
export default {
  name: "About",
  components: {
    Timeline
  }
};
</script>

<style scoped>
#about {
  display: flex;
  height: calc(100vh - 230px);
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 8rem;
  justify-content: center;
  align-items: center;
}

.about-section {
  display: flex;
}
.twitterfeed {
  flex: 1;
  height: 500px;
  padding: 2rem;
  margin: 1rem;
  overflow: scroll;
  background-color: white;
  border-radius: 1rem;
}

.twitterfeed::-webkit-scrollbar {
  width: 1em;
  border-radius: 1rem;
}

.twitterfeed::-webkit-scrollbar-corner {
  display: none;
}

.twitterfeed::-webkit-scrollbar-thumb {
  background-color: #745470;
  outline: none;
  border-radius: 1rem;
}

h2 {
  font-family: "Chewy", sans-serif;
  font-size: 3rem;
}

h3 {
  display: flex;
  margin-top: 0;
  font-family: "courgette", sans-serif;
  justify-content: center;
}
h3 svg {
  height: 20px;
  vertical-align: center;
  padding: 0 5px;
  fill: var(--dark-bg);
}

.about-us {
  display: flex;
  flex-direction: column;
  flex: 1.5;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: -2rem;
  justify-content: center;
  align-content: center;
  place-content: center;
}

h1 {
  font-family: "Courgette", sans-serif;
  text-align: left;
  font-size: 3rem;
}
p {
  font-size: 1.3rem;
  font-weight: 300;
  text-align: left;
}

p:nth-of-type(2),
p:nth-of-type(3) {
  margin-top: 2rem;
  margin-bottom: 0.1rem;
  text-align: center;
}
a,
.twitch {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-bg);
  color: var(--light-text);
  width: 300px;
  margin: 0 auto;
  border-radius: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.speak-pipe {
  padding: 1rem;
}

a:hover {
  transform: translateY(-3px) translateX(3px);
  box-shadow: -8px 8px 3px var(--comp-color);
}

.twitch svg {
  width: 44px;
  margin: 0.5rem;
  fill: var(--light-bg);
}

.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: black;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }
  #about {
    padding-top: 0;
  }
}

@media (max-width: 520px) {
  .twitterfeed {
    display: none;
  }
  h1 {
    font-size: 1.4rem;
  }
  #about {
    padding-top: 110px;
  }
}

@media (max-width: 320px) {
  #about {
    padding-top: 230px;
  }
  #about p:nth-of-type(2) {
    font-size: 1.1rem;
  }
}
</style>
