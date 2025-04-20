העתק את הקטע הבא לתוך תגית <head> ב-index.html שלך:

<!-- Add this inside <head> of index.html -->
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#000000">
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
</script>