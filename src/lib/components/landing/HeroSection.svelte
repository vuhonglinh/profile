<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Profile, Stat } from '$lib/data/portfolio';

	let { profile, stats } = $props<{ profile: Profile; stats: Stat[] }>();

	const projectsHref = resolve('/#projects');
	const contactHref = resolve('/#contact');
	const rootHref = resolve('/');
	const cvFileHref = rootHref.endsWith('/') ? `${rootHref}cv.pdf` : `${rootHref}/cv.pdf`;

	const openCv = () => {
		if (typeof window !== 'undefined') {
			window.open(cvFileHref, '_blank', 'noopener,noreferrer');
		}
	};
</script>

<section id="top" class="relative min-h-[52rem] overflow-hidden text-white">
	<img
		src="/plexify/hero-main.webp"
		alt="Hero background"
		class="absolute inset-0 h-full w-full object-cover object-center"
	/>
	<div class="absolute inset-0 bg-black/38"></div>
	<div
		class="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,12,0.9)_0%,rgba(2,6,12,0.62)_45%,rgba(2,6,12,0.35)_100%)]"
	></div>
	<div
		class="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(2,6,12,0.72)_100%)]"
	></div>

	<div
		class="relative z-10 mx-auto grid min-h-[52rem] max-w-7xl items-end gap-10 px-5 pb-14 md:px-8 md:pb-18 lg:grid-cols-[1.08fr_0.92fr]"
	>
		<div class="space-y-8">
			<div class="space-y-5">
				<h1 class="hero-title">
					{profile.name}
					<span class="mt-2 block text-[color:var(--primary)]">Full-Stack Developer</span>
				</h1>
				<p class="hero-subtitle">{profile.tagline}</p>
			</div>

			<div class="flex flex-wrap gap-3">
				<a href={projectsHref} class="btn-primary py-3 text-sm">Xem dự án</a>
				<a href={contactHref} class="btn-outline-light py-3 text-sm">Liên hệ</a>
				<button type="button" class="btn-outline-light py-3 text-sm" onclick={openCv}>
					Download CV
				</button>
			</div>

			<div class="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
				{#each stats as stat (stat.label)}
					<div class="stat-dark p-4 text-center">
						<p class="text-3xl font-semibold text-[color:var(--primary)]">{stat.value}</p>
						<p class="mt-2 text-[11px] font-medium tracking-[0.18em] text-white/68 uppercase">
							{stat.label}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<div class="hidden lg:block">
			<div class="dark-panel relative p-6">
				<div class="grid auto-rows-[150px] grid-cols-2 gap-4">
					<div class="row-span-2 overflow-hidden rounded-2xl">
						<img
							src="/plexify/stack-1.png"
							alt="Work sample 1"
							class="h-full w-full object-cover"
						/>
					</div>
					<a
						href="https://www.facebook.com/hong.linhx.2025"
						target="_blank"
						class="overflow-hidden rounded-2xl border bg-white"
					>
						<img
							src="/plexify/stack-2.png"
							alt="Work sample 2"
							class="h-full w-full object-cover"
						/>
					</a>

					<a
						href="mailto:davidvu.dev35@gmail.com"
						target="_blank"
						class="overflow-hidden rounded-2xl border bg-white"
					>
						<img src="/plexify/gmail.png" alt="Work sample 2" class="h-full w-full object-cover" />
					</a>

					<a
						href="https://www.linkedin.com/in/vu-linh-1698aa319/"
						target="_blank"
						class="overflow-hidden rounded-2xl border bg-white"
					>
						<img
							src="/plexify/stack-3.png"
							alt="Work sample 3"
							class="h-full w-full object-cover"
						/>
					</a>

					<a
						href="https://github.com/vuhonglinh"
						target="_blank"
						class="overflow-hidden rounded-2xl border bg-white"
					>
						<img src="/plexify/github.png" alt="Work sample 3" class="h-full w-full object-cover" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
