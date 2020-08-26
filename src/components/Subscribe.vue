<template>
  <div id="subscribe">
    <h2>Subscribe, Follow, or Listen</h2>
    <div class="wrapper">
      <div class="skill-card-grid">
        <div class="skill-card" v-for="sub in subs" :key="sub.title">
          <a :href="sub.url">
            <div class="sub-button">
              <img :src="getImgUrl(sub.pic)" :alt="sub.pic" />
              <h4>{{ sub.title }}</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscribe",
  data() {
    return {
      subs: [
        {
          pic: "Apple_Podcast_Icon.png",
          title: "Apple Podcasts",
          url:
            "https://podcasts.apple.com/us/podcast/cartoon-dumpster-dive/id1518560479"
        },
        {
          pic: "Spotify_Icon_RGB_Green.png",
          title: "Spotify",
          url: "https://open.spotify.com/show/0tT7ArzBFlqhgFdQcgHZk2"
        },
        {
          pic: "googlepodcasts.png",
          title: "Google Podcasts",
          url:
            "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xMTYwNDcxLnJzcw=="
        },
        {
          pic: "Stitcher_Logo.png",
          title: "Stitcher",
          url: "https://www.stitcher.com/podcast/cartoon-dumpster-dive"
        },
        {
          pic: "iheartradio.png",
          title: "iHeartRadio",
          url:
            "https://www.iheart.com/podcast/269-cartoon-dumpster-dive-65271616/"
        },
        {
          pic: "TuneIn_Logo_2018.svg",
          title: "",
          url:
            "https://tunein.com/podcasts/Media--Entertainment-Podcasts/Cartoon-Dumpster-Dive-p1333981/"
        },
        {
          pic: "overcastlogo.svg",
          title: "Overcast",
          url: "https://overcast.fm/itunes1518560479/cartoon-dumpster-dive"
        },
        {
          pic: "logo-vertical.png",
          title: "Pocket Cast",
          url: "http://pca.st/itunes/1518560479"
        },
        {
          pic: "c2-icon.svg",
          title: "Castro",
          url: "https://castro.fm/podcast/c82fde41-5283-4f45-9625-1c328a73ab70"
        },
        {
          pic: "podchaser.png",
          title: "Podchaser",
          url:
            "https://www.podchaser.com/podcasts/cartoon-dumpster-dive-1259074"
        },
        {
          pic: "podcastaddict.png",
          title: "Podcast Addict",
          url: "https://podcastaddict.com/podcast/3018143"
        },
        {
          pic: "deezer.png",
          title: "Deezer",
          url: "https://www.deezer.com/show/1374312"
        },
        {
          pic: "listennotes.png",
          title: "Listen Notes",
          url: "https://www.listennotes.com/c/88bf500ba8cb4d0f8ac23fe114683df3/"
        }
      ]
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/podcasts/" + pic);
    }
  }
};
</script>

<style scoped>
#subscribe {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 230px);
  max-width: 1400px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

h2 {
  font-weight: 300;
  letter-spacing: 1px;
}
.wrapper {
  max-width: 800px;
}

.skill-card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.sub-button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin: 0.5rem;
  transition: all 200ms ease-in-out;
}

.skill-card:nth-of-type(-n + 3) {
  font-size: 1.3rem;
}
.skill-card:nth-of-type(6) {
  width: 150px;
}

a,
a:visited {
  padding: 0;
  text-decoration: none;
  color: var(--dark-text);
}

.sub-button img {
  height: 60px;
  margin-right: 0.5rem;
}

.skill-card:nth-of-type(n + 4):nth-of-type(-n + 5) img {
  height: 30px;
}

.skill-card:nth-of-type(6) img {
  height: 40px;
}

.skill-card:nth-of-type(n + 7) img {
  height: 30px;
}

.sub-button:hover {
  box-shadow: -2px 2px 12px 0px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

@media (max-width: 520px) {
  #subscribe {
    padding-top: 110px;
  }
}
</style>
