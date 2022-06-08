<script lang="ts">
    import {onMount} from 'svelte';
    import {Chart, BarController, BarElement, CategoryScale, LinearScale} from "chart.js";

    Chart.register(BarElement, BarController, CategoryScale, LinearScale)

    // Taken from here: https://www.migrationpolicy.org/sites/default/files/resize/source_images/SPT-MexicanImmigrants2018-F7-700x338.png
    // and https://www.migrationpolicy.org/article/mexican-immigrants-united-states-2017
    const data = [
        {
            "name": "Family-Sponsored Paths",
            "mexico": 20,
        },
        {
            "name": "Immediate Relatives of U.S. Citizens",
            "mexico": 67
        },
        {
            name: "Employment-Based Preferences",
            mexico: 3
        },
        {
            "name": "Refugees and Asylees",
            mexico: 1
        },
        {
            name: "Other",
            mexico: 9
        }
    ]
    const data2 = [20, 67, 3, 1, 9]
    const labels = ["Family-Sponsored Paths", "Immediate Relatives of U.S. Citizens", "Employment-Based Preferences", "Refugees and Asylees", "Other"]

    let el;
    onMount(() => {
        const chart = new Chart(el, {
            type: "bar",
            data: {
                datasets: [{
                    data: data,
                    backgroundColor: [
                        'rgba(255,99,132,0.6)',
                        'rgba(80,230,16,0.6)',
                        'rgba(255, 205, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(80,230,16)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                    ],
                }],
                // labels: labels
            },
            options: {
                parsing: {
                    xAxisKey: "name",
                    yAxisKey: "mexico",

                },
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "sth"
                    },
                    legend: {
                        position: "top"
                    }
                }
            }
        })
    });
</script>

<div class="relative lg:w-[20vw] mx-auto w-screen px-4">
    <canvas bind:this={el} height="300" class="z-10 bg-white bg-opacity-60"></canvas>
</div>
<!--
<style>
    .chart :global(div) {
        font: 10px sans-serif;
        background-color: steelblue;
        text-align: right;
        padding: 3px;
        margin: 1px;
        color: white;
    }
</style>-->
