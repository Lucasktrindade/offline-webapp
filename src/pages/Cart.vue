
<template>
    <div class="cart">
      <div class="cart--text">
        <h3>Carrinho</h3>
        <p v-if="cartProducts.length <= 0">Não há produtos no carrinho.</p>
      </div>
      <div class="wrapper" v-if="cartProducts.length > 0">
        <table class="table">
          <thead>
            <th class="table--description">Nome</th>
            <th class="table--quantity">Descrição</th>
            <th class="table--subtotal">Preço</th>
          </thead>
          <tbody>
            <tr v-for="product in cartProducts" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>R$ {{product.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
  import {firebaseInstance, db} from '@/services/FirebaseService'

  export default {
    name: 'Cart',
    data () {
      return {
        cartProducts: [],
      }
    },
    created () {
        db().collection('cart').get()
            .then((querySnapshot) => {
              querySnapshot.forEach((value) => {
                this.cartProducts.push(value.data())
              })
            })
    }
  }
</script>

<style scoped>
.cart--text {
    text-align: center;
}
.wrapper {
    overflow-x: auto;
}
.table {
    border-collapse: collapse;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 98%;
}
th, td{
    border: 1px solid #000;
    padding: 1.2em .375em;
}
.table--description, .table--subtotal {
    width: 40%;
}
.table--quantity, .table--action {
    width: 40%;
}
.product--delete {
    cursor: pointer;
    padding: .5em;
}
  @media (min-width: 768px) {
    .table{
      width: 80%;
    }
  }
</style>