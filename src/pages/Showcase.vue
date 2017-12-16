<template>
    <div>
      <div class="product-list">
        <product v-for="item in products" :key="item.id" :item="item"></product>
      </div>
    </div>
</template>
<style>
    .product-list {
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-flow: row wrap;
      -ms-flex-flow: row wrap;
              flex-flow: row wrap;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
              justify-content: center;
    }
</style>
<script>
import FirebaseService from '@/services/FirebaseService'
import Product from '@/components/Product'

export default {
  name: 'Showcase',
  components: {
    Product
  },
  data () {
    return {
      title: 'Produtos',
      firebaseService: new FirebaseService(),
      products: []
    }
  },
  mounted () {
    const productsRef = this.firebaseService.getFirestore().collection('products')
    productsRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((value) => {
          this.products.push(value.data())
        })
      })
  }
}
</script>
