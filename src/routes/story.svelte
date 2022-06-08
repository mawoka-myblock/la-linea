<script lang="ts">
    import { scrollIntoView } from '../lib/utils.js';
    import Story1Picture from '../lib/media/story-1.webp';
    import Story2Picture from '../lib/media/story-2.webp';
    import Story4Picture from '../lib/media/story-4.webp';
    import Story5Picture from '../lib/media/story-5.webp';
    import Story6Picture from '../lib/media/story-6.webp';
    import Story7Picture from '../lib/media/story-7.webp';
    import Story8Picture from '../lib/media/story-8.webp';
    import Story9Picture from '../lib/media/story-9.webp';
    import Background from '../lib/background.svg';
    import Footer from "../lib/Footer.svelte";
</script>

<div class="snap-y snap-mandatory">
    <section
        class="pt-24 h-screen relative snap-center"
        style="background-image: url({Background})"
        id="0"
    >
        <h1 class="text-center text-3xl">The story</h1>
        <p class="text-center text-sm italic">
            Warning: This page will spoiler if you scroll down!
        </p>
        <p class="text-center text-red-700 block lg:invisible">
            Please visit this page on a desktop, otherwise the images won't fit well and the text
            may not be readable.
        </p>
        <div class="flex justify-center absolute bottom-2 w-screen">
            <button class="animate-bounce" on:click|preventDefault={() => scrollIntoView('1')}>
                <svg
                    class="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    />
                </svg>
            </button>
        </div>
    </section>
    <section
        class="pt-24 h-screen relative snap-center"
        style="background-image: url({Story1Picture})"
        id="1"
    >
        <div class="grid grid-cols-6 pl-4">
            <h1 class="text-center text-3xl font-bold col-start-5 col-span-2">
                Everything starts somewhere in Mexico on a farm
            </h1>
            <p class="text-center col-start-5 col-span-2">
                Miguel, Elena and their grandmother life there. Their parents left years ago and
                immigrated to America. Since then, their parents promise that they'll send money for
                them to come to America as well.
            </p>
        </div>
        <div class="flex justify-center absolute bottom-2 w-screen">
            <button class="animate-bounce" on:click|preventDefault={() => scrollIntoView('2')}>
                <svg
                    class="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    />
                </svg>
            </button>
        </div>
    </section>
    <section class="pt-24 h-screen relative" style="background-image: url({Story2Picture})" id="2">
        <div class="grid grid-cols-6 pt-60">
            <h1 class="text-center text-3xl font-bold col-start-2 col-span-2">
                Miguel leaves to go to America
            </h1>
            <p class="text-center col-start-2 col-span-2">
                He goes, because his father sent for him. He got instructions, money, etc to cross
                la linea. His journey starts by entering a bus where he sits next to Javi, who will
                get more important later on.
            </p>
        </div>
        <div class="flex justify-center absolute bottom-2 w-screen">
            <button class="animate-bounce" on:click|preventDefault={() => scrollIntoView('3')}>
                <svg
                    class="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    />
                </svg>
            </button>
        </div>
    </section>

    <section class="pt-24 h-screen relative" style="background-image: url({Background})" id="3">
        <div class="grid grid-cols-6 pt-60">
            <h1 class="text-center text-3xl font-bold col-start-2 col-span-2">
                The bus gets stopped
            </h1>
            <p class="text-center col-start-2 col-span-2">
                An official, <b>Morales</b> called, stops the bus to check the people. Every passenger
                stays in a row and Miguel recognizes his sister and called her, what Morales noticed.
                Morales checks passenger per passenger and shows everyone that it's not a problem if
                he, Morales, gets pesos from everyone. After that, all of the passengers had to enter
                a bus of the police. They drove for ages into the complete different direction and stopped.
                They stood in a row again and Javi played a trick on the officials by pretending he had
                a bad disease so they weren't paying attention at the others, who quickly escaped.
            </p>
        </div>
        <div class="flex justify-center absolute bottom-2 w-screen">
            <button class="animate-bounce" on:click|preventDefault={() => scrollIntoView('4')}>
                <svg
                    class="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    />
                </svg>
            </button>
        </div>
    </section>

    <section class="pt-24 h-screen relative" style="background-image: url({Story4Picture})" id="4">
        <div class="grid grid-cols-6 pt-20">
            <h1 class="text-center text-3xl font-bold col-start-2 col-span-2 text-white">
                The sleep
            </h1>
            <p class="text-center col-start-2 col-span-2 text-white">
                Bot slept with many others in a portico, where they get robbed. <br />
                On the next day the meet Javi again, who knew how to get to America.
            </p>
        </div>
        <div class="flex justify-center absolute bottom-2 w-screen">
            <button class="animate-bounce" on:click|preventDefault={() => scrollIntoView('5')}>
                <svg
                    class="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    />
                </svg>
            </button>
        </div>
    </section>
    <section
        class="pt-24 h-screen relative bg-cover"
        style="background-image: url({Story5Picture})"
        id="5"
    >
        <div class="grid grid-cols-6 pt-20 pl-2">
            <h1 class="text-center text-3xl font-bold col-start-1 col-span-2">Mata Gente</h1>
            <p class="text-center col-start-1 col-span-2">
                Javi's solution was the Mata Gente. It's a train which drives towards the American
                border, but it's very dangerous, because of train gangs, soldiers, etc. They joined
                the train by running next to it and hopping on it. All of the three managed that,
                but they saw many people die while trying to join the train.
            </p>
        </div>
        <div class="flex justify-center absolute bottom-2 w-screen">
            <button class="animate-bounce" on:click|preventDefault={() => scrollIntoView('6')}>
                <svg
                    class="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    />
                </svg>
            </button>
        </div>
    </section>

    <section
        class="pt-24 h-screen relative bg-cover"
        style="background-image: url({Story6Picture})"
        id="6"
    >
        <div class="grid grid-cols-6 pt-20 pl-2">
            <h1 class="text-center text-3xl font-bold col-start-1 col-span-2">New Plan</h1>
            <p class="text-center col-start-1 col-span-2">
                After three day on the train, soldier checked the train, but the three left the
                train, so they could escape the soldiers. They were chased, so they ran through
                field.
            </p>
        </div>
        <div class="flex justify-center absolute bottom-2 w-screen">
            <button class="animate-bounce" on:click|preventDefault={() => scrollIntoView('7')}>
                <svg
                    class="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    />
                </svg>
            </button>
        </div>
    </section>

    <section
        class="pt-24 h-screen relative bg-cover"
        style="background-image: url({Story7Picture})"
        id="7"
    >
        <div class="grid grid-cols-6 pt-40 pl-2">
            <h1 class="text-center text-3xl font-bold col-start-1 col-span-2 text-white">
                The helper
            </h1>
            <p class="text-center col-start-1 col-span-2 text-white">
                Javi talked to the people who owned the field and they could agree that a truck
                filled with coffee will bring them to a border town. This also worked flawlessly.
            </p>
        </div>
        <div class="flex justify-center absolute bottom-2 w-screen">
            <button class="animate-bounce" on:click|preventDefault={() => scrollIntoView('8')}>
                <svg
                    class="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    />
                </svg>
            </button>
        </div>
    </section>

    <section
        class="pt-24 h-screen relative bg-center"
        style="background-image: url({Story8Picture})"
        id="8"
    >
        <div class="grid grid-cols-6 pt-40 pl-2">
            <h1 class="text-center text-3xl font-bold col-start-1 col-span-2 text-white">Moisés</h1>
            <p class="text-center col-start-1 col-span-2 text-white">
                As they arrived in the border town, they went to Moisés, which was written in
                Miguels instructions. Moisés is a so called "coyote", who brings people through the
                desert. They packed their things and started their journey. They only had a limited
                amount of water, so they barely will get through since water is heavy.
            </p>
        </div>
        <div class="flex justify-center absolute bottom-2 w-screen">
            <button class="animate-bounce" on:click|preventDefault={() => scrollIntoView('9')}>
                <svg
                    class="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    />
                </svg>
            </button>
        </div>
    </section>

    <section
        class="pt-24 h-screen relative bg-center"
        style="background-image: url({Story9Picture})"
        id="9"
    >
        <div class="grid grid-cols-6 pt-40 pl-2">
            <h1 class="text-center text-3xl font-bold col-start-1 col-span-2">The end</h1>
            <p class="text-center col-start-1 col-span-2">
                Moisés walked with a steady pace and Javi tried to keep up with his swollen ankle,
                what he still could. Then, they heard a car, Moisés went to look and the three,
                Javi, Elena and Miguel, heard a gun. then, they carefully looked and saw that Moisés
                was hit by a bullet and has been put on a truck which was leaving. Moisés threw his
                backpack with water out of the car for the others. The others went on and then there
                was a sandstorm. After the sandstorm, Miguel and Elena lost Javi and they finally
                arrived at a highway.
            </p>
        </div>
        <div class="flex justify-center absolute bottom-2 w-screen">
            <button class="animate-bounce" on:click|preventDefault={() => scrollIntoView('0')}>
                <svg
                    class="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                    />
                </svg>
            </button>
        </div>
    </section>
</div>
<Footer />
