<script lang="ts">
  import { getTheTime } from "$lib/query.remote";

  let theTime = $derived(await getTheTime())
</script>

<h1>Start page</h1>
<p>
  The time is fetched from a remote query function. Everything works as expected.
</p>
<p>
  Navigating to another page with a copy of the query will break the refresh button. It will work once and the stop working.
</p>
<p>
  Navigating back doesn't fix it.
</p>
<p>
  Navigating to a page without the query fixes the button.
</p>
{theTime}
<button onclick={() => getTheTime().refresh()}>Refresh the time</button>

<br>
<a href="/leaf">Page with a copy of the query</a>
<br>
<a href="/timeless">Page without query</a>

<style>
  p {
    max-width: 80ch;
  }
</style>