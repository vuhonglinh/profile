<script lang="ts">
	import type { Project } from '$lib/data/portfolio';

	let { projects } = $props<{ projects: Project[] }>();

	const openExternal = (url?: string) => {
		if (!url) return;

		if (typeof window !== 'undefined') {
			window.open(url, '_blank', 'noopener,noreferrer');
		}
	};
</script>

<section id="projects" class="space-y-8">
	<div class="space-y-2">
		<p class="section-kicker">Dự án tiêu biểu</p>
		<h2 class="section-title">Dự án đã triển khai thực tế</h2>
	</div>

	<div class="grid gap-6 lg:grid-cols-2">
		{#each projects as project (project.name)}
			<article
				class="group flex min-h-[290px] overflow-hidden rounded-[2rem] bg-[#f6f4ee] p-4 shadow-[0_8px_24px_rgba(16,40,56,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(16,40,56,0.10)]"
			>
				<div class="grid w-full gap-5 md:grid-cols-[250px_minmax(0,1fr)]">
					<div class="relative h-[250px] overflow-hidden rounded-[1.35rem] md:h-full">
						<img
							src={project.thumbnail}
							alt={project.name}
							class="block h-full w-full object-cover transition duration-500 group-hover:scale-105"
						/>
					</div>

					<div class="flex min-w-0 flex-1 flex-col">
						<div class="space-y-3">
							<h3
								class="font-['Oswald'] text-[2rem] leading-[0.92] text-[#0e2a3d] uppercase md:text-[2.35rem]"
							>
								{project.name}
							</h3>

							<div class="flex flex-wrap items-center gap-2 text-sm text-[#6d7280]">
								<span>{project.role}</span>
							</div>

							<p class="max-w-[34ch] text-[15px] leading-relaxed text-[#6b7280]">
								{project.description}
							</p>

							<p class="text-sm leading-relaxed text-[#6d7280]">
								<span class="font-semibold text-[#102838]">Công nghệ:</span>
								{project.stack}
							</p>
						</div>

						<div class="mt-auto flex items-end justify-between gap-4 pt-6">
							<div class="flex flex-wrap gap-2"></div>
							<a
								href={project.link}
								target="_blank"
								title={`Mở dự án ${project.name}`}
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c8f11a] text-2xl text-[#102838] transition hover:scale-105"
							>
								→
							</a>
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
