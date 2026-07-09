<script module lang="ts">
	export const currentYear = $state(new Date().getFullYear());

	const techColors: Record<string, string> = {
		TypeScript: 'rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400',
		JavaScript: 'rounded-full border border-yellow-400/30 bg-yellow-400/20 px-3 py-1 text-sm font-medium text-yellow-300',
		TailwindCSS: 'rounded-full border border-cyan-500/30 bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-400',
		Tailwind: 'rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400',
		PostgreSQL: 'rounded-full border border-red-500/30 bg-red-500/20 px-3 py-1 text-sm font-medium text-red-400',
		'Angular 22': 'rounded-full border border-rose-600/30 bg-rose-600/20 px-3 py-1 text-sm font-medium text-rose-400',
		'Angular 21': 'rounded-full border border-rose-600/30 bg-rose-600/20 px-3 py-1 text-sm font-medium text-rose-400',
		Vercel: 'rounded-full border border-slate-500/30 bg-slate-500/20 px-3 py-1 text-sm font-medium text-slate-400',
		Supabase: 'rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400',
		JWT: 'rounded-full border border-yellow-500/30 bg-yellow-500/20 px-3 py-1 text-sm font-medium text-yellow-400',
		Svelte: 'rounded-full border border-orange-500/30 bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-400',
		'Drizzle ORM': 'rounded-full border border-[#C5F64F]/50 bg-[#C5F64F]/20 px-3 py-1 text-sm font-medium text-[#C5F64F]',
		'Google Cloud TTS': 'rounded-full border border-blue-600/30 bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-300',
		PHP: 'rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-400',
		MySQL: 'rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400',
		default: 'rounded-full border border-slate-500/30 bg-slate-500/20 px-3 py-1 text-sm font-medium text-slate-300'
	};
</script>

<script lang="ts">
	import ArrowLink from "../common/icons/ArrowLink.svelte";

    type Props = {
        showGif: boolean;
        hrefProyect: string;
        srcGif?: string;
        srcImage: string;
        altGif: string;
        altImage: string;
        nameProyect: string;
        description: string;
        bgGradient: string;
        hoverTextName: string;
        hoverBorder: string;
        circleStateBg: string;
        techStack: string[];
        stateName?: string;
        badgeText?: string;
        sameTab?: boolean;
        wrapperId?: string;
        shadowColor?: string;
        gifFit?: string;
    };
    let {
        showGif = $bindable(false),
        hrefProyect,
        bgGradient,
        nameProyect,
        hoverBorder,
        hoverTextName,
        circleStateBg,
        description,
        srcGif,
        srcImage,
        altGif,
        altImage,
        techStack,
        stateName = 'Live',
        badgeText,
        sameTab = false,
        wrapperId,
        shadowColor = 'shadow-cyan-500/20',
        gifFit = 'object-cover'
    }: Props = $props();
</script>

<div class="group relative" id={wrapperId}>
    <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r {bgGradient} blur opacity-20 transition duration-1000 group-hover:opacity-60 group-hover:duration-200"></div>

    <a
        href="{hrefProyect}"
        target={sameTab ? undefined : '_blank'}
        rel={sameTab ? undefined : 'noopener noreferrer'}
        onmouseenter={() => (showGif = true)}
        onmouseleave={() => (showGif = false)}
        class="relative block h-full rounded-3xl shadow-md {shadowColor}"
    >
        <div class="flex h-full flex-col rounded-3xl border border-slate-700/50 bg-slate-800/80 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] {hoverBorder} sm:p-8">
            <!-- Image -->
            <div class="relative mb-6 h-48 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-950">
                <img
                    src="{ srcGif || "images/gifNoDisponible.png" }"
                    class="h-full w-full {gifFit} md:hidden"
                    alt="{ altGif }"
                />
                {#if showGif}
                    <img
                        src="{ srcGif || "images/gifNoDisponible.png" }"
                        class="hidden h-full w-full {gifFit} md:block"
                        alt="{ altGif }"
                    />
                {:else}
                    <img
                        src="{ srcImage }"
                        class="hidden h-full w-full object-contain md:block"
                        alt="{ altImage }"
                    />
                {/if}
            </div>

            <!-- Header -->
            <div class="mb-3 flex items-start justify-between gap-3">
                <h3 class="flex items-center gap-2 text-2xl font-bold leading-tight text-white transition-colors {hoverTextName}">
                    {nameProyect}
                    {#if badgeText}
                        <span class="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">{badgeText}</span>
                    {/if}
                </h3>
                <div class="mt-1 flex-shrink-0 text-slate-500 transition-colors {hoverTextName}">
                    <ArrowLink />
                </div>
            </div>

            <!-- Description -->
            <p class="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
            {description}
            </p>

            <!-- Tech Stack -->
            <div class="mb-5 flex flex-wrap gap-2">
                {#each techStack as tech}
                    <span class={techColors[tech] ?? techColors.default}>{tech}</span>
                {/each}
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between border-t border-slate-700 pt-4">
                <span class="flex items-center gap-2 text-sm text-slate-400">
                    <span class="h-2 w-2 rounded-full {circleStateBg}"></span>
                    {stateName}
                </span>
                <span class="text-sm text-slate-500">{currentYear}</span>
            </div>
        </div>
    </a>
</div>
