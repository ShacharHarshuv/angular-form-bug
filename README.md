# How to reproduce

1. Server the app
2. Note the UI starts responsive, you can hover the button and see its color change. Note you can also of see the number of items in the array, meaning the array is in the JS heap (loaded into memory)
3. Press the button
4. UI will freeze for a couple seconds - then the browser tab crashes with SIGILL (seems like out of memory). If you choose a smaller number for the array, it will not crash but it will still take a long time to show the inner component, while the browser is stuck.

# What is happening

Angular is recreating the entire FormTree for this form. But it doesn't need to because we have no validations, neither we are accessing any inner FormTree. It could just pass the array as reference.

# Why this is a valid usecase

You can imagine a user could upload a big list of stuff (from a file, from exactly) which should technically be part of the form model. In these cases, this issue is avoidable on Angular side.
