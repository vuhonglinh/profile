<script lang="ts">
	import type { SkillGroup } from '$lib/data/portfolio';

	let { skillGroups } = $props<{ skillGroups: SkillGroup[] }>();
</script>

<section id="skills" class="px-6 py-12 md:px-8 md:py-16">
	<div class="mx-auto max-w-7xl">
		<div class="mb-10 text-center">
			<p class="text-sm font-semibold tracking-[0.24em] text-slate-500 uppercase">Công nghệ</p>
			<h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
				Các công nghệ tôi sử dụng để xây dựng sản phẩm
			</h2>
		</div>

		<div class="grid gap-8 lg:grid-cols-3">
			{#each skillGroups as group (group.title)}
				<article
					class="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
				>
					<h3 class="mb-8 text-center text-2xl font-bold text-slate-900">
						{group.title}
					</h3>

					<div class="space-y-7">
						{#each group.items as item (item.name)}
							<div>
								<div class="mb-3 flex items-center justify-between gap-3">
									<div class="flex min-w-0 items-center gap-3">
										<div
											class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 shadow-sm"
										>
											{#if item.icon}
												<img src={item.icon} alt={item.name} class="h-5 w-5 object-contain" />
											{:else}
												<span class="text-xs font-bold text-slate-600">
													{item.name.slice(0, 2)}
												</span>
											{/if}
										</div>

										<p class="truncate text-lg font-semibold text-slate-700">
											{item.name}
										</p>
									</div>

									<span class="text-base font-medium text-slate-500">{item.level}%</span>
								</div>

								<div class="h-3 overflow-hidden rounded-full bg-slate-200">
									<div
										class="h-full rounded-full transition-all duration-500"
										style={`width:${item.level}%; background:${item.color};`}
									></div>
								</div>
							</div>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
