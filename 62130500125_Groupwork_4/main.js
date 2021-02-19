const app = {
    data() {
        return {
            objs:[{img:'https://lifestyle.campus-star.com/app/uploads/2017/11/hanamichi-sakuragi-anime-slam-dunk-wallpaper.jpg',title:'Hanamichi Sakuragi',done:false},
        {img:'http://topicstock.pantip.com/chalermthai/topicstock/2008/07/A6779924/A6779924-22.jpg',title:'Kaede Rukawa',done:false},
        {img:'https://pbs.twimg.com/profile_images/1856896081/Sendoh_A_P_400x400.jpg',title:"Akira Sendoh",done:false}],
        form:{
            text:"",
            search:false
        },
        image:"https://pbs.twimg.com/profile_images/1856896081/Sendoh_A_P_400x400.jpg",
        toggle:false
                }
    },
    methods: {
        toggleDone(index){
            this.objs[index].done = !this.objs[index].done
        },
        search(){
            this.form.search = !this.form.search
            this.form.text = ""
        },updateImage(objImage){
            this.toggle = true;
            return this.image = objImage
        },cancel(){
            this.toggle = !this.toggle;
        }
    },
    computed: {
        countUndone(){
            return this.objs.filter( o => o.done ).length
        },
        searching(){
            return this.objs.filter((e)=>{
                return e.title.toLowerCase().includes(this.form.text.toLowerCase());
            })
        }
    }

}
var mountedApp = Vue.createApp(app).mount('#app')