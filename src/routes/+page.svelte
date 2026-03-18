<script lang="ts">
	import AboutSection from '$lib/components/landing/AboutSection.svelte';
	import ContactSection from '$lib/components/landing/ContactSection.svelte';
	import ExperienceSection from '$lib/components/landing/ExperienceSection.svelte';
	import HeroSection from '$lib/components/landing/HeroSection.svelte';
	import HighlightsSection from '$lib/components/landing/HighlightsSection.svelte';
	import ProjectsSection from '$lib/components/landing/ProjectsSection.svelte';
	import ServicesProcessSection from '$lib/components/landing/ServicesProcessSection.svelte';
	import SiteFooter from '$lib/components/landing/SiteFooter.svelte';
	import SiteHeader from '$lib/components/landing/SiteHeader.svelte';
	import SkillsSection from '$lib/components/landing/SkillsSection.svelte';
	import {
		experiences,
		highlights,
		processSteps,
		profile,
		projects,
		services,
		skillGroups,
		stats
	} from '$lib/data/portfolio';
</script>

<div class="overflow-x-clip bg-white">
	<SiteHeader />
	<HeroSection {profile} {stats} />

	<main class="mx-auto mt-12 flex max-w-7xl flex-col gap-16 px-5 pb-20 md:gap-24 md:px-8">
		<AboutSection />
		<SkillsSection {skillGroups} />
		<ProjectsSection {projects} />
		<ExperienceSection {experiences} />
		<ServicesProcessSection {services} {processSteps} />
		<HighlightsSection {highlights} />
		<ContactSection {profile} />
	</main>

	<SiteFooter {profile} />
</div>
