<script>
    import Footer from '../lib/Footer.svelte';
    import Opinion1 from '../lib/media/opinion-1.webp';
    import Opinion2 from '../lib/media/opinion-2.webp';
</script>

<div class="min-h-screen">
    <section class="pt-24">
        <h1 class="text-center text-3xl font-bold">My Opinion</h1>
    </section>
    <section class="pt-12">
        <h1 class="text-center text-xl">Recommendation</h1>
        <article class="prose mx-auto">
            <p>
                The book is definitely worth a read, since it shows in an interesting and exciting
                read. The book illustrates the problem with the immigration in an entertaining way.
                You can also easily imagine this situation, since the protagonist is in my age. What
                I didn't like was, that many words in the book are Spanish and that the end was a
                bit short.
                <br />
                <br />
                All in all, it’s an interesting read where you can get to know how a journey from Mexico
                to America could be.
            </p>
        </article>
    </section>
    <section class="pt-12">
        <h1 class="text-center text-xl">Inspirational section</h1>
        <article class="prose mx-auto">
            <p>
                I’ve never thought that a from Mexico to America is so difficult and dangerous. I’ve
                also never thought that so many children in my age do this journey.
                <br />
                <br />
                I think that this immigration shows that people aren’t happy with their way of live and
                want to completely restart their lives. Since many children do this journey, building
                a wall to make them victims of gangs or that they die at the wall isn’t a great option.
                This also looks like behind the wall are the people who are worth more and better in
                every aspect than the people from the other side of the wall.
                <img src={Opinion2} alt="Wall between Mexico and the USA" class="-mb-2" />
                <span class="text-xs leading-3"
                    >© Tomas Castelazo, <a
                        rel="nofollow"
                        class="external text"
                        href="http://www.tomascastelazo.com">www.tomascastelazo.com</a
                    >&nbsp;/&nbsp;<a href="//commons.wikimedia.org/wiki/Main_Page" title="Main Page"
                        >Wikimedia Commons</a
                    >,
                    <a
                        href="https://creativecommons.org/licenses/by-sa/4.0"
                        title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a
                    >,
                    <a href="https://commons.wikimedia.org/w/index.php?curid=55417770">Link</a
                    ></span
                >
                <br />
                <br />
                This is a global problem which isn’t easily solved, but, I am sure, isn’t solved by letting
                the people die at the border because of hunger, etc. This is from a human-rights perspective
                just awful.
                <br />
                <br />
                My generation also doesn't know borders, which makes the following picture even more
                dramatic looking.
                <img
                    src={Opinion1}
                    alt="Border between Mexico and USA with clear separation in the middle"
                />
            </p>
        </article>
    </section>
</div>
<Footer />

<style>
    :global(body) {
        background-color: #ffffff;
        background-image: url('../lib/background.svg');
    }
</style>
