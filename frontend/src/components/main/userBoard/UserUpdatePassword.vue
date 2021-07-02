<template>
    <section class="password-update-form">
        <form name="form" @submit.prevent="updatePassword">
            <div class="form-group">
                <label for="passwordOld">Old Password : </label>
                <input  type="password" 
                        v-validate="'required|min:6|max:40'" 
                        placeholder="enter your old password "
                        v-model="passwords.passwordOld" 
                        class="form-control" 
                        name="passwordOld"
                        id="passwordOld"/>

                <div    class="alert alert-danger" 
                        v-if="errors.has('passwordOld')" 
                        role="alert"> The old password is required !
                </div>
            </div>

            <div class="form-group">
                <label for="passwordUpdated"> New password : </label>
                <input type="password" 
                        placeholder=" enter your new password..."
                        v-model="passwords.password" 
                        v-validate="'required|min:6|max:40'" 
                        class="form-control" 
                        ref="password"
                        name="passwordUpdated"
                        id="passwordUpdated"/>

                <div class="alert alert-danger" 
                     v-if="errors.has('password')" 
                     role="alert"> new password is required
                </div>
            </div>

            <div class="form-group">
                <label for="passwordConfirm">Confirm new password : </label>
                <input type="password" 
                       placeholder=" enter again your new password..."
                       v-model="passwordConfirm" 
                       v-validate="'required|min:6|max:40|confirmed:password'" 
                       data-vv-as="password" 
                       class="form-control" 
                       name="passwordConfirm"
                       id="passwordConfirm"/>

                <div   class="alert alert-danger" 
                        v-if="errors.has('passwordConfirm')" 
                        role="alert"> Passwords must be identical!
                </div>
            </div>
            
            <div class="form-group">
                <button class=" btn-update-password btn btn-block" 
                        :disabled="loading">
                    <span v-show="loading" 
                            class="spinner-border spinner-border-sm"></span>
                    <span class="">Send update
                        <font-awesome-icon class="icon-paper-plane" icon="paper-plane" />
                    </span>
                </button>
            </div>
            <input type="reset" @click="onReset" class=" btn-reset-update btn btn-outline-primary btn-block" aria-label="Reset" value="Reset">
        </form>

        <div v-if="message"  class="alert message-zone" 
             :class="successful ? 'alert-success' : 'alert-danger'">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button> {{message}}
        </div>

    </section>
</template>

<script>
import Password from '../../../models/password';
import UserService from './../../../services/user.service.js';
import { mapActions} from "vuex";

export default {
    data() {
        return {
            visible: false,
            passwords: new Password('',''),
            loading: false,
            submitted: false,
            successful: false,
            message: '',
            passwordConfirm: '',
        };
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
    },

    methods: {
        ...mapActions(["getOneUserAction"]),

        onReset() {
          this.$validator.reset();
          this.passwords = {};
        },

        async updatePassword() {
            try {
                this.message = '';
                this.submitted = true;
                this.loading = true;
                const isValid = await this.$validator.validateAll();
                if (!isValid) {
                    this.loading = false;
                    return;
                }
                const userUuid = this.currentUser.uuid;
                const data = { userUuid, ...this.passwords};
                const response = await UserService.updatePassword(userUuid, data)
                this.successful = true;
                this.loading = false;
                this.getOneUserAction(userUuid);
                this.$validator.reset();
                this.passwordConfirm = '';
                this.passwords.password = '';
                this.passwords.passwordOld = '';
                this.message = response.data;

            } catch(error) {
                this.loading = false;
                this.message = (error.response && error.response.data) || error.message || error.toString();
           }
        },
    }
};
</script>

<style lang="scss" scoped>

label {
  display: block;
  margin-top: 10px;
}

.message-zone {
    font-size: 0.95rem
}

.btn-update-password {
    color: white;
    background: green;
    &:hover {
        background: rgb(26, 174, 26);
    }
}

.btn-reset-update {
    color: blue;
    &:hover {
        color: white;
        background: blue;
    }
}


</style>