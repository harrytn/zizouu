<!-- src/routes/no/+page.svelte -->
<script lang="ts">
	import { goto } from "$app/navigation";
	import { config } from "../../config";
    import { base } from "$app/paths";

	let containerRef: HTMLDivElement;
	let noButtonRef: HTMLButtonElement;

	function moveNoButton() {
		if (!containerRef || !noButtonRef) return;
		const containerRect = containerRef.getBoundingClientRect();
		const newX =
			Math.random() * (containerRect.width - noButtonRef.offsetWidth);
		const newY =
			Math.random() * (containerRect.height - noButtonRef.offsetHeight);
		noButtonRef.style.position = "absolute";
		noButtonRef.style.left = `${newX}px`;
		noButtonRef.style.top = `${newY}px`;
		noButtonRef.style.width = "150px";
	}

	function handleYes() {
	 	goto(`${base}/yes`);
	}
</script>

<div class="container" bind:this={containerRef}>
	<img
		src={config.noPage.image}
		alt="Angry"
		class="angry-image"
		loading="lazy"
	/>
	<p>{config.noPage.message}</p>
	<div class="response-buttons">
		<button
			class="btn"
			bind:this={noButtonRef}
			on:mouseover={moveNoButton}
			on:focus={moveNoButton}
			on:click={moveNoButton}
		>
			{config.mainPage.noText}
		</button>
		<button class="btn" on:click={handleYes}>
			{config.mainPage.yesText}
		</button>
	</div>
</div>
