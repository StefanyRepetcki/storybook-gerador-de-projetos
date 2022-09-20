<template>
  <div class="banner" :style="`background-image: url(${this.image});`">
    <div class="banner__content">
      <h1 class="banner__title">{{this.title}}</h1>
      <p class="banner__description">{{this.description}}</p>
      <a class="banner__button" :href="this.button.link">{{this.button.text}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  props: {
    title: {
      type: String,
      default: 'Banner'
    },
    text: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    button: {
      type: Object,
      default: {
        text: 'Button',
        link: '#'
      }
    },
    image: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.banner {
  color: #fff;
  padding: 2rem;
  text-align: center;
}

.banner__title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.banner__text {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.banner__button {
  background-color: #fff;
  color: #000;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}

.banner__button:hover {
  background-color: #ccc;
}

.banner__button:active {
  background-color: #aaa;
}

.banner__button:focus {
  outline: none;
}

a {
  text-decoration: none;
}

@media (min-width: 768px) {
  .banner {
    padding: 4rem;
  }

  .banner__title {
    font-size: 3rem;
  }

  .banner__text {
    font-size: 2rem;
  }

  .banner__button {
    font-size: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .banner {
    padding: 6rem;
  }

  .banner__title {
    font-size: 4rem;
  }

  .banner__text {
    font-size: 2.5rem;
  }

  .banner__button {
    font-size: 2rem;
  }
}

@media (min-width: 1280px) {
  .banner {
    padding: 8rem;
  }

  .banner__title {
    font-size: 5rem;
  }

  .banner__text {
    font-size: 3rem;
  }

  .banner__button {
    font-size: 2.5rem;
  }
}


</style>