const sentence = "hello there from lighthouse labs \n";
time = setTimeout(() => 0)


for (const char of sentence) {
  setTimeout(() => {process.stdout.write(char)}, time += 50)
}