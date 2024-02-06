n = 7;
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    if (row == 1) {
      if (col == 7 || col <= 4) {
        process.stdout.write("* ")
      }
      else {
        process.stdout.write("  ")
      }
    }
    else if (row < 4) {
      if (col == 4 || col == 7) {
        process.stdout.write("* ")
      } else {
        process.stdout.write("  ")
      }
    }
    else if (row == 4) {
      if (col == 1 || col <= 7) {
        process.stdout.write("* ")
      }
    }
    else if (row < 7) {
      if (col == 4 || col == 1) {
        process.stdout.write("* ")
      }
      else {
        process.stdout.write("  ")
      }

    } else {
      if (col == 1 || col >= 4) {
        process.stdout.write("* ")
      }
      else {
        process.stdout.write("  ")
      }
    }
  }
  console.log();
}