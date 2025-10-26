<script lang="ts">
  import { getTheTime } from "$lib/query.remote";

  let theTime = $derived(await getTheTime())
</script>

<h1>Leaf page</h1>
<p>
  The refresh button only works one time after navigating here.
</p>
{theTime}
<button onclick={() => getTheTime().refresh()}>Refresh the time</button>
<br>
<a href="/">Go to start</a>