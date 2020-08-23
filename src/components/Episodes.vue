<template>
  <div id="episodes">
    <!-- <div class="wrapper">
      <div class="player">
        <div class="player-controls">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"
            />
          </svg>
        </div>
        <div class="progress" ref="progress">
          <div class="title">
            <div class="title-name">Episode 1 - Battletoads</div>
            <div class="progress__duration">01:24:19</div>
          </div>
          <div class="progress__bar" @click="clickProgress">
            <div class="progress__current" :style="{ width: barWidth }"></div>
          </div>
          <div class="progress__time">{{ currentTime }}</div>
        </div>
      </div>
    </div> -->
    <div class="podcast-list-container">
      <h3>Episode Guide</h3>
      <ul class="podcast-list" v-if="episodes">
        <li v-for="(episode, index) in episodes" :key="index">
          <div class="track-info">
            Episode {{ episode.episode_number }} | {{ episode.title }}
            <span class="publish-date">
              {{ episode.published_at }}
            </span>
          </div>
          <div class="track-synop" v-html="episode.description"></div>
        </li>
      </ul>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
import { getEpisodes } from "@/services/track-service.js";
export default {
  name: "Episodes",
  data() {
    return {
      episodes: []
    };
  },
  async created() {
    this.episodes = (await getEpisodes()).data;
  },
  computed: {
    formattedDate() {
      let dateStr = this.episode.published_at;
      let date = new Date(dateStr);
      return date;
    }
  }
};
</script>

<style scoped>
#episodes {
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: center;
  padding-top: 200px;
  padding-bottom: 88px;
  min-height: 100%;
  margin: 5rem auto;
}
.player {
  display: flex;
  width: 1000px;
  height: 150px;
  background-color: var(--primary-color);
  margin: 0 auto;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0px 15px 35px -5px rgba(12, 12, 12, 0.75);
}

.player-controls {
  display: flex;
  justify-content: center;
  align-items: center;
}

.player-controls :nth-of-type(1) {
  height: 50px;
  padding: 0.5rem;
}
.player-controls :nth-of-type(2) {
  height: 100px;
  padding: 0.5rem;
}
.player-controls :nth-of-type(3) {
  height: 50px;
  padding: 0.5rem;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: bottom;
}

.title-name {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  font-size: 2rem;
  margin: 1rem;
}

.progress {
  width: 100%;
  margin-top: -15px;
}
.progress-duration {
  display: flex;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  vertical-align: center;
}

.progress__bar {
  height: 6px;
  width: 100%;
  cursor: pointer;
  background-color: var(--dark-text);
  display: inline-block;
  border-radius: 1px;
}
.progress__current {
  height: inherit;
  width: 0%;
  background-color: var(--light-text);
  border-radius: 10px;
}

.podcast-list-container {
  box-sizing: border-box;
  margin: 0 auto;
  background-color: rgba(45, 28, 43, 0.2);
  width: 1000px;
  height: 600px;
  padding: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  margin-top: -2px;
}

.podcast-list {
  list-style-type: none;
  overflow: scroll;
  padding: 0 1rem;
  margin: 0;
  padding-right: 0;
  height: 550px;
}

.podcast-list :first-child {
  margin-top: 0;
}

.podcast-list::-webkit-scrollbar {
  width: 1em;
  border-radius: 2rem;
}

.podcast-list::-webkit-scrollbar-corner {
  display: none;
}

.podcast-list::-webkit-scrollbar-thumb {
  background-color: var(--light-text);
  outline: none;
}

.podcast-list li {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  color: var(--light-text);
}

.track-synop {
  text-align: left;
  padding-top: 0.5rem;
  font-weight: 300;
}

.track-info {
  display: flex;
  font-size: 1.4rem;
  justify-content: space-between;
  text-align: left;
  border-bottom: 1px solid var(--light-text);
}

.track-info .publish-date {
  font-size: 1rem;
  align-self: flex-end;
}

.podcast-list li:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.podcast-list .active {
  background-color: rgba(0, 0, 0, 0.7);
}

.podcast-list-container h3 {
  margin: 0;
  padding-left: 1.5rem;
}
</style>
