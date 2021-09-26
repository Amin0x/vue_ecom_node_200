
<template>
    <div class="aa-navbar-top">
        <div class="container">
           <div class="d-flex align-items-center">
                <div><img src="../assets/logo-1.png" alt="logo"></div>
                <div class="ms-auto"><button>Login / Register</button></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       name:'',
    }
</script>

<style scoped>
.aa-navbar-top{
    align-items: center;
    padding: 1rem;
    background-color: #000;
}

.aa-navbar-top button{
    padding: 8px 16px;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    text-align: center;
    outline: none;
    background: #aaa;
    text-decoration: none;
    transition: all 0.4s ease 0s;
    border: 1px solid #7e7e7e;
    color: #fff;
    font-weight: 700;
    padding: 4px 10px;
    line-height: .8em;
    text-decoration: none;
    white-space: normal;
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
    position: relative;
    font-size: 15px;
    font-style: normal;
    border: 1px solid transparent;
    background-color: #f6f6f6;
    color: #111;
    line-height: 15px;
    font-size: 15px;
    text-shadow: none;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 1px 2px rgba(0,0,0,.08);
}

</style>
