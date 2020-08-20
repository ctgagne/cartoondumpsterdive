<template>
  <div class="home">
    <div class="main">
      <div class="hero">
        <div class="title">The <span>Cartoon Dumpster Dive</span> Podcast</div>
        <div class="greeting">
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="900" height="275">
              <text x="15" y="75">
                Dive into a dumpster of
                <tspan x="15" y="160">
                  animated nostalgia with
                </tspan>
                <tspan x="15" y="240">
                  Joel and Andrew.
                </tspan>
              </text>
            </svg>
          </h1>
        </div>
        <div class="mondays">
          <h1>New Episodes <br />Every Monday!</h1>
        </div>
        <div class="home-buttons">
          <a href="#" class="btn">Subscribe</a
          ><a href="#episodes" class="btn"
            >Listen Now
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              /></svg
          ></a>
        </div>
      </div>
      <img src="@/assets/CDD-2.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  max-width: 1260px;
  margin: 0 auto;
  margin-top: 15rem;
}
.main {
  display: flex;
  position: relative;
  padding: 1rem;
  margin: 0 auto;
}

.hero {
  display: flex;
  flex-direction: column;
  text-align: left;
  vertical-align: center;
  justify-content: center;
  overflow: visible;
  z-index: 1;
  width: 1000px;
}
.title {
  font-size: 24px;
  padding-left: 15px;
}
.title span {
  font-family: "Chewy", sans-serif;
  font-size: 32px;
}
.main img {
  position: absolute;
  right: 0;
  width: 609px;
}

.greeting h1 {
  font-family: "Courgette", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  font-size: 72px;
  color: var(--dark-text);
  text-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
  fill: var(--dark-text);
  stroke: var(--light-text);
  stroke-width: 4px;
  paint-order: stroke fill;
  margin-top: -8px;
  margin-bottom: -1rem;
}

.greeting h1 svg {
  z-index: 999;
}

.mondays h1 {
  font-family: "Courgette", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  font-size: 64px;
  color: var(--dark-text);
  text-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 15px;
}

.home-buttons {
  padding-left: 15px;
}

.home-buttons .btn:first-of-type {
  text-decoration: none;
  background-color: var(--dark-bg);
  border: 1px solid var(--dark-bg);
  color: var(--light-text);
  padding: 0.5rem 3rem;
  font-size: 24px;
  vertical-align: middle;
}

.home-buttons .btn:last-of-type {
  background-color: none;
  color: var(--dark-text);
  border: 1px solid var(--dark-bg);
  padding: 0.5rem 2rem;
  font-size: 24px;
  margin-left: 2rem;
  text-decoration: none;
  vertical-align: middle;
}

.btn svg {
  background-color: none;
  width: 20px;
}
.home-buttons .btn:last-of-type:hover {
  background: linear-gradient(
    272deg,
    var(--light-bg),
    var(--primary-color),
    var(--light-bg)
  );
  background-size: 600% 600%;

  -webkit-animation: Shine 2s ease 1;
  -moz-animation: Shine 2s ease 1;
  animation: Shine 2s ease 1;
}

.home-buttons .btn:first-of-type:hover {
  background: linear-gradient(272deg, #2d1c2b, var(--primary-color), #2d1c2b);
  background-size: 600% 600%;

  -webkit-animation: Shine 2s ease 1;
  -moz-animation: Shine 2s ease 1;
  animation: Shine 2s ease 1;
}

@-webkit-keyframes Shine {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes Shine {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes Shine {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
