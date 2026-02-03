<!-- src/routes/yes/+page.svelte -->
<script lang="ts">
	import { config } from "../../config";
</script>

<div class="container">
	<img src={config.yesPage.image} alt="Yes" class="cute-image" loading="lazy" />
	<div class="heading-with-images"></div>
	<p>{config.yesPage.message}</p>
</div>
