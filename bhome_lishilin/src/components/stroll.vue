<template>
	<div>
		1
	</div>
</template>
<script>
	import {mapActions} from "vuex";
	export default {
		mounted(){
			this.$store.dispatch("change",4)
		}
	}
</script>