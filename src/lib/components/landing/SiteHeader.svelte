<script lang="ts">
	import { resolve } from '$app/paths';

	const topHref = resolve('/#top');
	const aboutHref = resolve('/#about');
	const skillsHref = resolve('/#skills');
	const projectsHref = resolve('/#projects');
	const experienceHref = resolve('/#experience');
	const contactHref = resolve('/#contact');
</script>

<header class="fixed top-0 left-0 z-50 w-full px-5 pt-4 md:px-8 md:pt-6">
	<nav class="nav-shell mx-auto flex max-w-7xl items-center justify-between px-3 py-2.5 md:px-4">
		<a href={topHref} class="logo-mark h-10 w-29"> 
		</a>

		<ul class="hidden items-center gap-6 lg:flex">
			<li><a class="nav-link text-sm font-medium" href={aboutHref}>Giới thiệu</a></li>
			<li><a class="nav-link text-sm font-medium" href={skillsHref}>Kỹ năng</a></li>
			<li><a class="nav-link text-sm font-medium" href={projectsHref}>Dự án</a></li>
			<li><a class="nav-link text-sm font-medium" href={experienceHref}>Hành trình</a></li>
			<li><a class="nav-link text-sm font-medium" href={contactHref}>Liên hệ</a></li>
		</ul>

		<a href={contactHref} class="btn-primary px-5 py-2 text-xs md:px-6">Liên hệ hợp tác</a>
	</nav>
</header>
