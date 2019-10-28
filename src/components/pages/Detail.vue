<template>
    <div>
        <p>{{data.title}}</p>
        <p>{{data.text}}</p>
    </div>
</template>

<script>
	export default {
		props: {
			data: Object,
		},
	};
</script>