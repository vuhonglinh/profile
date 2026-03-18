<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	const title = 'Vũ Hồng Lĩnh | Full-Stack Developer';
	const description =
		'Personal landing page portfolio with projects, skills, work journey, and contact details for full-stack web development.';

	let { children } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="full-stack developer, portfolio, sveltekit, laravel, nodejs, web development"
	/>
	<meta name="author" content="Vũ Hồng Lĩnh" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
