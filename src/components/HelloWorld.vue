<template>
  <div class="hello">
      <div class="aa-search">
        <div class="search-title">
          Search and Compare
        </div>
        <div class="aa-search-wrap">
          <input type="text">
          <button>Search</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aa-search{
    padding: 120px 0;
    background-image: url('../assets/homepage33.png');
  }

  .aa-search .search-title{
    
      color: #ffffff;
      font-size: 40px;
      font-weight: 700;
  }

  .aa-search input{
        border-width: 1px;
    height: 52px;
    padding: 0 130px 0 20px;
        transition: all 0.5s ease-out;
    background: #f6f6f6;
    border: 3px solid #ececec;
    width: 100%;
    outline: none;
  }
  .aa-search .aa-search-wrap{
    position: relative;
        max-width: 600px;
        margin: 30px auto;
  }
  .aa-search-wrap button{
    padding: 0 35px;
    height: 100%;
    right: 0;
    top: 0;
    font-size: 100%!important;
    color: #fff!important;
    background-color: #ff4136;
    border: 1px solid #ff4136;
    position: absolute;
   
  }
</style>
