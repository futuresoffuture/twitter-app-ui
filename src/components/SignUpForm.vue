<template>
	<div>
		<navbar />
		<div class="signup">
			<b-form @submit="onSubmit" v-if="show">
				<b-form-group
					id="input-group-1"
					label="Email address:"
					label-for="input-1"
				>
					<b-form-input
						id="input-1"
						v-model="form.email"
						type="email"
						placeholder="Enter email"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group id="input-group-2" label="Your First Name:" label-for="input-2">
					<b-form-input
						id="input-2"
						v-model="form.firstName"
						placeholder="Enter first name"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group id="input-group-4" label="Your Last Name:" label-for="input-4">
					<b-form-input
						id="input-4"
						v-model="form.lastName"
						placeholder="Enter last name"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group id="input-group-3" label="Password" label-for="input-3">
					<b-form-input
						id="input-3"
						v-model="form.password"
						placeholder="Enter password"
						required
					></b-form-input>
				</b-form-group>

				<b-button type="submit" variant="primary">Create</b-button>
			</b-form>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar.vue";
export default {
	components: { Navbar },
	data() {
		return {
			form: {
				email: "",
				firstName: "",
				lastName: "",
				password: ""
			},
			show: true
		};
	},
	methods: {
		onSubmit(event) {
			event.preventDefault();
			axios
				.post(
					"http://localhost:8090/twitter-app/user",
					{
						firstName: this.form.firstName,
						lastName: this.form.lastName,
						password: this.form.password,
						userId: this.form.email
					}
				)
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
			console.log(this.$router);
			this.$router.push({ path: `/timelines?userId=${this.form.email}` }) 
				
		},
	}
};
</script>
<style>
.signup {
	margin-left: 2%;
	margin-top: 2%;
	width: 60%;
}
</style>
