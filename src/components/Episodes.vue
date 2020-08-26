<template>
  <div id="episodes">
    <div class="wrapper">
      <div class="player">
        <div class="player-controls">
          <svg
            @click="prevTrack"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"
            />
          </svg>
          <svg
            @click="play"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            v-if="!isTimerPlaying"
          >
            <path
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
            />
          </svg>
          <svg
            @click="play"
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"
            />
          </svg>
          <svg
            @click="nextTrack"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"
            />
          </svg>
        </div>
        <div class="progress" ref="progress">
          <div class="title">
            <div class="title-name" v-if="currentTrack">
              <span class="episode-number"
                >Episode {{ currentTrack.episode_number }}
              </span>
              {{ currentTrack.title }}
            </div>
            <div class="progress-duration" v-if="duration != 'NaN:NaN:NaN'">
              {{ duration }}
            </div>
            <div class="progress-duration" v-else>
              <div class="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="progress__bar" @click="clickProgress">
            <div class="progress__current" :style="{ width: barWidth }"></div>
          </div>
          <div class="progress__time">{{ currentTime }}</div>
        </div>
      </div>
    </div>

    <div class="podcast-list-container">
      <h3>Episode Guide</h3>
      <ul class="podcast-list" v-if="episodes">
        <li
          v-for="(episode, index) in episodes"
          :key="index"
          @click="
            chooseTrack(index);
            play();
            toggle(index);
          "
          :class="{ active: index == activeIndex }"
        >
          <div class="track-info">
            Episode {{ episode.episode_number }} | {{ episode.title }}
            <span class="publish-date">
              {{ episode.published_at | moment }}
            </span>
          </div>
          <div class="track-synop" v-html="episode.description"></div>
        </li>
      </ul>
      <div class="lds-facebook" v-else>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getEpisodes } from "@/services/track-service.js";
export default {
  name: "Episodes",
  data() {
    return {
      episodes: [],
      activeIndex: 0,
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  async created() {
    this.episodes = (await getEpisodes()).data;
    let vm = this;
    this.currentTrack = await this.episodes[0];
    this.audio = await new Audio();
    this.audio.src = await this.currentTrack.audio_url;
    this.audio.ontimeupdate = await function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = await function() {
      vm.generateTime();
    };
    this.audio.onended = await function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = index;
    },
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durhour = parseInt(this.audio.duration / 3600);
      let durmin = parseInt((this.audio.duration - durhour * 3600) / 60);
      let dursec = Math.floor(this.audio.duration % 60);
      let curhour = parseInt(this.audio.currentTime / 3600);
      let curmin = parseInt((this.audio.currentTime - curhour * 3600) / 60);
      let cursec = Math.floor(this.audio.currentTime % 60);
      if (durhour < 10) {
        durhour = "0" + durhour;
      }
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curhour < 10) {
        curhour = "0" + curhour;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durhour + ":" + durmin + ":" + dursec;
      this.currentTime = curhour + ":" + curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
        this.activeIndex--;
      } else {
        this.currentTrackIndex = this.episodes.length - 1;
        this.activeIndex = this.episodes.length - 1;
      }
      this.currentTrack = this.episodes[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.isShowCover = false;
      if (this.currentTrackIndex < this.episodes.length - 1) {
        this.currentTrackIndex++;
        this.activeIndex++;
      } else {
        this.currentTrackIndex = 0;
        this.activeIndex = 0;
      }
      this.currentTrack = this.episodes[this.currentTrackIndex];
      this.resetPlayer();
    },
    chooseTrack(index) {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      this.currentTrack = this.episodes[index];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.audio_url;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMM Do YYYY");
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

.wrapper {
  padding: 0.5rem;
  padding-bottom: 0;
}
.player {
  display: flex;
  width: 950px;
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
  fill: var(--dark-bg);
}

.player-controls :nth-of-type(1) {
  height: 50px;
  padding: 0.5rem;
  cursor: pointer;
}
.player-controls :nth-of-type(2) {
  height: 100px;
  padding: 0.5rem;
  cursor: pointer;
}
.player-controls :nth-of-type(3) {
  height: 50px;
  padding: 0.5rem;
  cursor: pointer;
}

.player-controls :hover {
  animation: pulse 1.5s infinite ease-in-out;
}

.title {
  display: flex;
  justify-content: space-between;
}

.title-name {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  font-size: 2.1rem;
  margin: 1rem 0;
  font-weight: 600;
}

.progress {
  width: 100%;
  margin: 1.5rem;
  margin-top: 0;
}
.progress-duration {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  margin: 1rem 0;
}

.progress__bar {
  height: 10px;
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
  border-radius: 1px;
}

/* Podcast List */

.podcast-list-container {
  box-sizing: border-box;
  margin: 0 auto;
  background-color: rgba(45, 28, 43, 0.2);
  width: 950px;
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

.episode-number {
  font-weight: 300;
  margin-right: 1rem;
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

.track-synop >>> a {
  color: white;
  text-decoration: none;
}

.track-synop >>> a:hover {
  text-decoration: underline;
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
  font-family: "courgette", cursive;
}

.lds-facebook {
  display: flex;
  position: relative;
  width: 30px;
  height: 30px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 24px;
  width: 16px;
  margin-top: -20px;
  background: var(--dark-text);
  justify-content: center;
  align-items: center;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: -8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: -32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: -56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}

@keyframes pulse {
  0%,
  100% {
    fill: var(--dark-text);
  }
  50% {
    fill: #5f3a5b;
  }
}

@media (max-width: 1024px) {
  .player {
    width: 700px;
    height: 400px;
    flex-direction: column;
  }
  .title {
    flex-direction: column;
  }
  .title-name {
    flex-direction: column;
  }
  .progress {
    margin: 0;
  }
  .podcast-list-container {
    width: 700px;
  }
  .progress__bar {
    width: 95%;
  }
  .player-controls {
    order: 2;
  }
}

@media (max-width: 768px) {
  .player {
    width: 500px;
    height: 400px;
    flex-direction: column;
  }
  .podcast-list-container {
    width: 500px;
  }
}

@media (max-width: 520px) {
  .player {
    width: 325px;
    height: 325px;
    flex-direction: column;
  }
  .podcast-list-container {
    width: 325px;
  }
  .progress-duration {
    font-size: 1.25rem;
  }
  .title-name {
    font-size: 1.5rem;
  }
  #episodes {
    padding-top: 150px;
    padding-bottom: 1rem;
  }
}

@media (max-width: 320px) {
  .player {
    width: 275px;
    height: 325px;
    flex-direction: column;
  }
  .podcast-list-container {
    width: 275px;
  }
}
</style>
