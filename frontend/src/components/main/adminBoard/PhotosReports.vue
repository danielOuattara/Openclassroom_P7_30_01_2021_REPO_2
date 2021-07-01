
<template>
 
        <section class="user-report">
            <button @click="getPhotosReports" >Click to get photo reports</button>
            <!-- <p>{{this.photosReportsGetters}}</p> -->
            <div v-for="report, index in photosReportsGetters" :key="index" class="report-container">
                <div class="sender infos">
                    <h2> Report sender</h2>
                    <p> id: {{report.ownerId}}</p>
                    <p> firstName: {{report.owner.firstName}}</p>
                    <p> lastName: {{report.owner.lastName}}</p>
                    <p> email : {{report.owner.email}}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div class="photo infos" >
                    <h2>Photo reported</h2>
                    <p>photo.id : {{report.photoId}}</p>
                    <p>{{report.message}}</p>
                    <p>{{report.status}}</p>
                    <p>{{report.createdAt}}</p>
                    <p>{{report.photoId}}</p>
                     <img :src="report.owner.avatar" alt="owner avatar" style="max-width: 15%">
                </div>
                <div class="target-person infos">
                    <h2>Photo owner infos</h2>
                    <p> id: {{report.photo.ownerId}}</p>
                    <p>firstName: {{report.photo.owner.firstName}}</p>
                    <p>lastName: {{report.photo.owner.lastName}}</p>
                    <p>email:  {{report.photo.owner.email}}</p>
                </div>
            </div>
        </section>
</template>

<script>
// import UserService from './../services/user.service.js';
import {mapGetters, mapActions } from "vuex";
export default {
    name: 'BoardAdmin',
    data() {
        return {
            content: '',
            message: ''
        };
    },

    mounted() {        
        this.getPhotosReportsAction(); // automatic action
        //   UserService.getAdminBoard()
        //   .then( response => {
        //     this.content = response.data
        //   })
        //   .catch( err => {
        //       this.content = (err.response && err.response.data) || err.message || err.toString();
        //   })
        if (!this.currentUser) {
            this.$router.push('/login');
        }
    },

    computed: {
        ...mapGetters(["photosReportsGetters"]),
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    
    methods: {
        ...mapActions(["getPhotosReportsAction"]),

        async getPhotosReports() { // manual action to get reports
            try {
                await this.$store.dispatch("getPhotosReportsAction");
                
            } catch (err) {
                this.message = (err.response && err.response.data) || err.message || err.toString();
            }
        },
    }
};
</script>

<style lang="scss" scoped>
.admin-board {
    max-width: 85vw;
    margin: auto;
    // @media screen and (min-width: 740px) {
    //     //  max-width: 60%;
    // }
}

.report-container {
    display: flex;
    border: 1px solid grey;
    flex-direction: column;
    margin-top: 2rem;
    height: auto;
    
  
    @media screen and (min-width: 740px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
}

h2 {
    font-size: 1.5rem
}

.infos {
    // border-top: 2px solid grey;
    margin-top: 2rem;
    padding-top: 1rem;
    margin:auto;
}


</style>