<template>
    
</template>
<style>

</style>
<script>
import FirebaseService from '@/services/FirebaseService'

export default {
  name: 'Showcase',
  data () {
    return {
      title: 'Produtos',
      firebaseService: new FirebaseService()
    }
  },
  mounted () {
    this.firebaseService.getFirestore()
      .collection('products').get().then((querySnapshot) => {
        console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`)
        })
      })
  }
}
</script>
