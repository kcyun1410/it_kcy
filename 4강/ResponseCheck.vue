//vue conponent
//확장자는 vue 지만 javascript 파일로 생각

<template>
    <div>
        <div id ="screen" v-bind:class="state" @click="onClickScreen">{{message}}</div>
        <div>
            <div>평균 시간: {{}}</div>
            <button @:click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
    let startTime=0;
    let endTime = 0;
    let timeout = null;
    export default{
        data(){
           return{
               result: [],
               state: 'waiting',
               message: '클릭해서 시작하세요.',
           }
        },
        methods: {
            onReset(){

            },
            onClickScreen(){
                if(this.state==='waiting'){
                    this.state='ready';
                    this.message = '초록색이 되면 클릭하세요';
                    setTimeout(()=>{
                        this.state='now';
                        this.message = '지금 클릭!';
                    }, Math.floor(Math.random()*1000)+2000);
                }else if (this.state === 'ready'){
                    this.state = 'waiting';
                    this.message = '너무 성급하시군요! 초록색이 된 후에 클릭해주세요';
                }else if(this.stae === 'now'){
                    this.state ='waiting';
                    this.message = '클릭해서 시작하세요';
                }
            },
        }
    };
</script>

<style scoped>
    #screen{
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting{
        background-color: aqua;
    }
    #screen.ready{
        background-color: red;
        color: white;
    }
    #screen.now{
        background-color: greenyellow;
    }
</style>