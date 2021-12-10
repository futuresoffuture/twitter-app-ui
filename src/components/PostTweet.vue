<template>
	<div>
		<navbar />
		<div class="tweet">
			<b-form @submit="onSubmit" inline>
				<b-form-input
					id="inline-form-input-tweet"
					v-model="tweet"
					class="mb-2 mr-sm-2 mb-sm-0"
					placeholder="Message...."
				></b-form-input>

				<b-button type="submit" variant="primary">Post</b-button>
				<b-button @click="navigateToTimelines()" variant="primary">Timelines</b-button>
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
			tweet: ""
		};
	},
	mounted() {
		window.scroll(0, 0);
	},
	methods: {
		navigateToTimelines() {
			this.$router.push({ path: `/timelines?userId=${this.$route.query.userId}` }) 
		},
		onSubmit(event) {
			event.preventDefault();
			axios
				.post(
					`http://localhost:8080/tweet?userId=${this.$route.query.userId}`,
					{
						message: this.tweet
					}
				)
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
		},
	}
};
</script>
<style>
.tweet {
	display: block;
	margin-left: 2%;
	margin-top: 2%;
	width: 60%;
}
</style>
