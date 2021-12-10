<template>
	<div>
		<navbar />
		<b-button @click="navigateToPost()" variant="primary">Post</b-button>
		<b-list-group>
			<b>Timeline</b>
			<b-list-group-item v-for="m in tweets" :key="m.id"
				>{{ m.message }}
				<b-button class="delete" type="submit" variant="primary"
					>Delete</b-button
				></b-list-group-item
			>
		</b-list-group>
	</div>
</template>
<script>
import axios from "axios";
import Navbar from "./Navbar.vue";

export default {
	components: { Navbar },
	data() {
		return {
			tweets: []
		};
	},
	mounted() {
		this.getTweets();
		window.scroll(0, 0);
	},
	methods: {
		navigateToPost() {
			this.$router.push({ path: `/post?userId=${this.$route.query.userId}` }) 

		},
		getTweets() {
			console.log(this.$route.query.userId);
			axios
				.get(
					`http://localhost:8080/timelines?userId=${this.$route.query.userId}`
				)
				.then(response => {
					console.log(response.data);
					this.tweets = response.data;
					console.log(this.tweets[0].message);
				})
				.catch(err => {
					console.log(err);
				});
		}
	}
};
</script>
<style>
.list-group{
	margin-left:2%;
	margin-top: 2%;
	width: 60%;
}
.delete{ 
	margin-left: 70%;
	margin-top: -2%;
}
</style>
