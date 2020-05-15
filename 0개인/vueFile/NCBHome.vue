//vue conponent
//확장자는 vue 지만 javascript 파일로 생각

<template>
    <div>
        <div class="body-inner">
            <header id="header" class="navbar-fixed-top header4" role="banner">
                <div class="container">
                    ::before
                    <div class="row">
                        ::before
                        <!--logo start-->
                        <div class="navbar-header">
                            ::before
                            <!--navbar_toggle-->
                            <button type="button" class="navbar-toggle"></button>
                            <div class="navbar-brand">
                                <router-link to="/"><img class="img-logo" src="image/nuvo_logo.png"></router-link>
                            </div>
                            ::after
                        </div>
                        <!--/logo end-->
                        <div class="navbar-collapse clearfix collapse" role="navigation">
                            <ul>
                                <li class="active">
                                <router-link to=""></router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        methods: {
        
        }
    }
</script>

<style>
    .container{
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    .container::before,.container::after{
        display: table;
        content: " ";
    }
    .row{
        margin-right: -15px;
        margin-left: -15px;
    }
    .row::before, .row::after{
        display: table;
        content: " ";
    }
    .navbar-header{
        z-index: 9999;
    }
    .navbar-header::before,.navbar-header::after{
        display:table;
        content: " ";
    }
    .navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none;
    }
    .navbar-collapse.collapse {
    display: block!important;
    height: auto!important;
    padding-bottom: 0;
    overflow: visible!important;
    }
    .clearfix:before, .clearfix:after {
    display: table;
    content: " ";
    }
</style>