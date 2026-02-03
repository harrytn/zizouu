<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { config } from "../config";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    import { base } from "$app/paths";

	let containerRef: HTMLDivElement;
	let noButtonRef: HTMLButtonElement;

	// Button click handlers (using SvelteKit navigation)

    function handleYes() {
        goto(`${base}/yes`);
    }
    function handleNo() {
        goto(`${base}/no`);
    }
</script>

<div class="container" bind:this={containerRef}>
	<img
		src={config.mainPage.topImage}
		alt="Main page"
		class="invite-image"
		loading="lazy"
	/>

	<div class="heading-with-images">
		<img
			src={config.mainPage.leftHeart}
			alt="Heart Left"
			class="side-image"
			loading="lazy"
		/>
		<h1>{config.mainPage.heading}</h1>
		<img
			src={config.mainPage.rightHeart}
			alt="Heart Right"
			class="side-image"
			loading="lazy"
		/>
	</div>

	<p>{config.mainPage.invitation}</p>

	<div class="response-buttons">
		<button class="btn" bind:this={noButtonRef} on:click={handleNo}>
			{config.mainPage.noText}
		</button>
		<button class="btn" on:click={handleYes}>
			{config.mainPage.yesText}
		</button>
	</div>
</div>
