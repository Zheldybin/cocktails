<script setup>
import axios from 'axios'
import { computed } from 'vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { COCKTAIL_BY_ID } from '@/assets/constants/api'
import AppLayout from '@/components/AppLayout.vue'

const route = useRoute()
const router = useRouter()

const cocktail = ref(null)
const cocktailId = computed(() => route.path.split('/').pop())

const ingredients = computed(() => {
  const ingredients = []

  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break

    const ingredient = {}
    ingredient.name = cocktail.value[`strIngredient${i}`]
    ingredient.measure = cocktail.value[`strMeasure${i}`]

    ingredients.push(ingredient)
  }

  return ingredients
})

async function getCocktail() {
  const data = await axios.get(`${COCKTAIL_BY_ID}${cocktailId.value}`)
  cocktail.value = data?.data?.drinks[0]
}

function goBack() {
  router.go(-1)
}

getCocktail()
</script>

<template>
  <div class="wrap" v-if="cocktail">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" :backFunc="goBack">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="list">
            <div class="list-item" v-for="(item, key) in ingredients" :key="key">
              {{ item.name }}
              <template v-if="item.measure"> | {{ item.measure }} </template>
            </div>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/main.scss';
</style>
