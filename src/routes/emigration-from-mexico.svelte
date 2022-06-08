<script lang="ts">
    import Chart from "$lib/Emigration-Chart.svelte"
    import Footer from "../lib/Footer.svelte";
</script>

<div class="pt-24 h-screen">
    <section>
        <h1 class="text-center text-3xl">About the emigration from Mexico</h1>
    </section>
    <section>
        <article class="prose mx-auto">
            Many people leave Mexico, because they hope that they’ll get a (better) job in another
            country. Most of them fled to California and Texas. In recent years, the mexican
            immigrant population shrunk from 2010 to 2017 by ~300.000, although many people still
            migrated to the US. Los Angeles has a mexican population of ~13%. Although they got to
            the USA, 21% of all Mexican immigrants are living in poverty in America as well (native
            born: 9%). Most immigrations were financed by relatives or families (~63%). 37% of the
            Mexican immigrants are uninsured (healthcare-wise), which is way more than the 7% of the
            native-borns.
        </article>
    </section>



    <section class="pb-[40vh] pt-8">
        <h3 class="text-2xl text-center">Funding of the Emigrations</h3>
        <Chart />
    </section>
    <section class="pb-20">
        <p class="text-center">
            Source: <a
                href="https://www.migrationpolicy.org/article/mexican-immigrants-united-states-2017"
                class="text-blue-500 hover:text-blue-700 hover:underline">Migrationpolicy.org</a
        >
        </p>
    </section>
    <Footer />
</div>


<style>
    :global(body) {
        background-color: #ffffff;
        background-image: url('../lib/background.svg');
    }
</style>
