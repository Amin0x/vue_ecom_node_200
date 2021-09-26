<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <img src="" alt="">
                    </div>

                    <div class="card-body">
                       <div class="d-flex align-items-center justify-content-between">
                           <div class="price"></div>
                           <div class="brand"></div>
                       </div>
                       <div class="title"></div>
                       <div class="buttons">
                           <div class="aabutton"><button type="button" class="btn" role="button"></button></div>
                           <div class="aabutton"><button type="button" class="btn" role="button"></button></div>
                           <div class="aabutton"><button type="button" class="btn" role="button"></button></div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
