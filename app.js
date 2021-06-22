
const app = Vue.createApp({

data () {
return {
    
    count: 10
}
},

methods: {
  increment() {
    // `this` will refer to the component instance
    this.count = this.count +5;
    return this.count;
  },
  decrement() {
    // `this` will refer to the component instance
    this.count = this.count - 5;
    return this.count;
  },
  addition() {
    // `this` will refer to the component instance
    this.count = this.count + this.count;
    return this.count;
  }
}
})

app.mount('#demo');