<script>
  import { getWeatherFrom } from '../services/weather'
  const weatherPromise = getWeatherFrom()
</script>

{#await weatherPromise then weather}
    <h1>{weather.conditionText}</h1>
{/await}

<h1>Svelte Weather</h1>

<style>
    h1 {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>
