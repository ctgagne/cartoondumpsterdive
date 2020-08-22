<template>
  <div id="about">
    <h2>About the Podcast</h2>
    <div class="twitterfeed">
      <h3>Live Updates</h3>
      <Timeline
        id="cartoonDD"
        sourceType="profile"
        :options="{ tweetLimit: '20', theme: 'light' }"
      >
        <div class="spinner"></div
      ></Timeline>
    </div>

    <p>
      A good podcast discussing bad cartoons. Cartoon Dumpster Dive takes a in
      depth look at some of the cartoons you may or may not remember fondly.
    </p>
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
  height: calc(100vh - 230px);
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 6rem;
  justify-content: center;
  align-items: center;
}
.twitterfeed {
  width: 500px;
  height: 500px;
  padding: 2rem;
  margin: 1rem;
  overflow: scroll;
  background-color: white;
  border-radius: 1rem;
}

.twitterfeed:-webkit-scrollbar {
  width: 2em;
}

.twitterfeed:-webkit-scrollbar-corner {
  display: none;
}

.twitterfeed:-webkit-scrollbar-thumb {
  background-color: var(--light-bg);
  outline: none;
}

h2 {
  font-family: "Chewy", sans-serif;
  font-size: 3rem;
}

h3 {
  margin-top: 0;
  font-family: "courgette", sans-serif;
}
</style>
